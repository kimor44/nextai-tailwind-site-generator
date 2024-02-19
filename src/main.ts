import { appendCopyButton } from "./lib/highlightjs/appendCopyButton";
import { createUpdateIframe } from "./lib/iframe/createUpdateIframe";
import { renderMessages } from "./lib/chat/renderMessages";
import { chatCompletion } from "./lib/openAi/chatCompletion";
import { buildOpenaiKey } from "./lib/chat/buildOpenaiKey";

const input = document.querySelector("#generator") as HTMLInputElement;
const messages = [] as string[];
input.addEventListener("submit", async (event) => {
  event.preventDefault();
  const fieldSet = document.querySelector(
    "#generator-wrapper"
  ) as HTMLFieldSetElement;
  const formData = new FormData(event.currentTarget as HTMLFormElement);
  const prompt = formData.get("generator__textarea") as string;
  const key = buildOpenaiKey();
  const chatCompletionRender = await chatCompletion(prompt, key as string);
  let code = "";
  const onNewChunk = createUpdateIframe();

  for await (const chunk of chatCompletionRender) {
    fieldSet.disabled = true;

    const newChunk = chunk.choices[0]?.delta?.content || "";
    code += newChunk;
    onNewChunk(code);
  }

  fieldSet.disabled = false;

  messages.push(prompt);

  renderMessages(messages);

  appendCopyButton(code);
});
