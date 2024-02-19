import { openai } from "./lib/openAi/openAiKey";
import { appendCopyButton } from "./lib/highlightjs/appendCopyButton";
import { promptSystem } from "./lib/openAi/promptSystem";
import { createUpdateIframe } from "./lib/iframe/createUpdateIframe";
import { renderMessages } from "./lib/chat/renderMessages";

const input = document.querySelector("#generator") as HTMLInputElement;
const messages = [] as string[];
input.addEventListener("submit", async (event) => {
  event.preventDefault();
  const fieldSet = document.querySelector(
    "#generator-wrapper"
  ) as HTMLFieldSetElement;
  const formData = new FormData(event.currentTarget as HTMLFormElement);
  const prompt = formData.get("generator__textarea") as string;
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-4-0125-preview",
    stream: true,
    temperature: 1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 1500,
    messages: [
      {
        role: "system",
        content: promptSystem,
      },
      { role: "user", content: prompt },
    ],
  });

  let code = "";
  const onNewChunk = createUpdateIframe();

  for await (const chunk of chatCompletion) {
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
