export const resetChat = () => {
  const oldResetChatButton = document.getElementById("reset-chat");
  if (oldResetChatButton) return oldResetChatButton;

  const resetChatButton = document.createElement("button");
  resetChatButton.id = "reset-chat";
  resetChatButton.innerText = "Reset chat";
  resetChatButton.classList.add(
    "bg-black",
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded"
  );
  resetChatButton.addEventListener("click", () => {
    location.reload();
  });
  return resetChatButton;
};
