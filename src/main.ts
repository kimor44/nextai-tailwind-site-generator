import { appendCopyButton } from "./lib/highlightjs/appendCopyButton";
import { createUpdateIframe } from "./lib/iframe/createUpdateIframe";
import { renderMessages } from "./lib/chat/renderMessages";
import { chatCompletion } from "./lib/openAi/chatCompletion";
import { buildOpenaiKey } from "./lib/chat/buildOpenaiKey";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { promptSystem } from "./lib/openAi/promptSystem";

const input = document.querySelector("#generator") as HTMLInputElement;
let messages: ChatCompletionMessageParam[] = [
  { role: "system", content: promptSystem },
];
const fieldSet = document.querySelector(
  "#generator-wrapper"
) as HTMLFieldSetElement;

input.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (fieldSet.disabled) return;

  const form = event.currentTarget as HTMLFormElement;

  const formData = new FormData(form);

  const prompt = formData.get("generator__textarea") as string;

  messages.push({ role: "user", content: prompt });

  renderMessages(messages);

  const key = buildOpenaiKey();

  fieldSet.disabled = true;
  const chatCompletionRender = await chatCompletion(key as string, messages);
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

  appendCopyButton(code);
});
