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
    messages: [
      {
        role: "system",
        content: promptSystem,
      },
      { role: "user", content: prompt },
    ],
    model: "gpt-3.5-turbo",
    stream: true,
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
