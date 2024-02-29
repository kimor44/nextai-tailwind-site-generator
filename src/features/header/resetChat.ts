import { Button } from "../../ui/button";

export const resetChat = () => {
  const oldResetChatButton = document.getElementById("reset-chat");
  if (oldResetChatButton) return oldResetChatButton;

  const resetChatButton = new Button();
  resetChatButton.addClassType("action");
  resetChatButton.addText("Reset chat");
  resetChatButton.addNewEventListener("click", () => {
    location.reload();
  });
  resetChatButton.addId("reset-chat");

  return resetChatButton.render();
};
