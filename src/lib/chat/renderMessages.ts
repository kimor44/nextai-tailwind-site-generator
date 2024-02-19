export const renderMessages = (messages: String[]) => {
  const chat = document.querySelector("#openai-chat") as HTMLDivElement;
  const spacer = document.createElement("div");
  spacer.classList.add("h-2");
  chat.insertAdjacentElement("afterend", spacer);
  chat.innerHTML = messages
    .map((message) => {
      const content = message.replace(/\n/g, "<br>");
      return `<li><span class="text-red-500">You : </span>${content}</li>`;
    })
    .join("\n");
};
