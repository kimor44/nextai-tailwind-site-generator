import { hideForm } from "../../features/header/hideForm";
import { resetChat } from "../../features/header/resetChat";

export const actionButtons = () => {
  const actionBox = document.getElementById("actions-box") as HTMLElement;
  const hideFormButton = hideForm();
  const resetChatButton = resetChat();

  actionBox.appendChild(hideFormButton);
  actionBox.appendChild(resetChatButton);
};
