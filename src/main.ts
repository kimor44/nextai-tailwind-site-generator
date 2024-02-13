import { openai } from "./lib/openAi/openAiKey";
import { appendCopyButton } from "./lib/highlightjs/appendCopyButton";
import { promptSystem } from "./lib/openAi/promptSystem";
import { createUpdateIframe } from "./lib/iframe/createUpdateIframe";

const input = document.querySelector("#generator") as HTMLInputElement;
input.addEventListener("submit", async (event) => {
  event.preventDefault();
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
    const newChunk = chunk.choices[0]?.delta?.content || "";
    code += newChunk;
    onNewChunk(code);
  }

  appendCopyButton(code);
});
