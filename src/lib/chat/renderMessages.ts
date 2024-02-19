import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

export const renderMessages = (messages: ChatCompletionMessageParam[]) => {
  const chat = document.querySelector("ul#openai-chat") as HTMLDivElement;
  chat.innerHTML = "";
  const spacer = document.createElement("div");
  spacer.classList.add("h-2");
  for (const message of messages) {
    if (message.role !== "user") {
      continue;
    }
    const content = message.content as string;
    const li = document.createElement("li");
    li.innerText = content;
    const span = document.createElement("span");
    span.classList.add("text-red-500");
    span.textContent = "You : ";
    li.prepend(span);
    chat.appendChild(li);
  }
  chat.insertAdjacentElement("afterend", spacer);
};
