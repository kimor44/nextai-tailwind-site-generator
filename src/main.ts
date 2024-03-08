import { createUpdateIframe } from "./lib/iframe/createUpdateIframe";
import { renderMessages } from "./features/chat/renderMessages";
import { TChatError, chatCompletion } from "./lib/openAi/chatCompletion";
import { buildOpenaiKey } from "./lib/openAi/buildOpenaiKey";
import {
  ChatCompletionChunk,
  ChatCompletionMessageParam,
} from "openai/resources/index.mjs";
import { promptSystem } from "./lib/openAi/promptSystem";
import { updateRevealCodeButton } from "./lib/header/updateRevealCodeButton";
import { actionButtons } from "./lib/header/actionButtons";
import { kebabButton } from "./lib/header/kebabButton";
import { Stream } from "openai/streaming.mjs";

const input = document.querySelector("#generator") as HTMLInputElement;
let messages: ChatCompletionMessageParam[] = [
  { role: "system", content: promptSystem },
];
const fieldSet = document.querySelector(
  "#generator-wrapper"
) as HTMLFieldSetElement;

const revealButton = document.getElementById(
  "reveal-code"
) as HTMLButtonElement;

kebabButton();

input.addEventListener("submit", async (event) => {
  event.preventDefault();

  revealButton.disabled = true;

  if (fieldSet.disabled) return;

  const form = event.currentTarget as HTMLFormElement;

  const formData = new FormData(form);

  const prompt = formData.get("generator__textarea") as string;

  if (!prompt) return;

  const key = buildOpenaiKey();

  if (!key) {
    fieldSet.disabled = false;
    return;
  }

  messages.push({ role: "user", content: prompt });

  fieldSet.disabled = true;
  const chatCompletionRender: TChatError | Stream<ChatCompletionChunk> =
    await chatCompletion(key as string, messages);

  if (chatCompletionRender && "error" in chatCompletionRender) {
    localStorage.removeItem("openai-key");
    messages.pop();
    alert("Please enter a valid, prepaid API key.");
    fieldSet.disabled = false;

    return;
  }

  renderMessages(messages);
  let code = "";
  const onNewChunk = createUpdateIframe();

  for await (const chunk of chatCompletionRender) {
    const isDone = chunk.choices[0]?.finish_reason === "stop";
    const newChunk = chunk.choices[0]?.delta?.content || "";

    if (isDone) {
      form.reset();
      fieldSet.disabled = false;
      messages = messages.filter((message) => message.role !== "assistant");
      messages.push({ role: "assistant", content: code });
      break;
    }

    code += newChunk;
    onNewChunk(code);
  }
  updateRevealCodeButton(code);
  actionButtons();
});
