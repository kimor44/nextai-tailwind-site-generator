import { hideForm } from "./hideForm";
import { resetChat } from "./resetChat";

export const actionButtons = () => {
  const actionBox = document.getElementById("actions-box") as HTMLElement;
  const hideFormButton = hideForm();
  const resetChatButton = resetChat();

  actionBox.appendChild(hideFormButton);
  actionBox.appendChild(resetChatButton);
};
