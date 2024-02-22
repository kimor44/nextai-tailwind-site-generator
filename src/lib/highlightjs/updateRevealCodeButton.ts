import { appendCopyButton } from "./appendCopyButton";
import { updateCodeHighlight } from "./updateCodeHighlight";

export const updateRevealCodeButton = (finalCode: string) => {
  const reavealCodeButton = document.getElementById(
    "reveal-code"
  ) as HTMLButtonElement;
  reavealCodeButton.disabled = false;

  const dialogModal = <HTMLDialogElement>(
    document.getElementById("reveal-code-dialog")
  );

  const openModal = () => {
    updateCodeHighlight(finalCode);
    appendCopyButton(finalCode);

    dialogModal.showModal();
  };

  reavealCodeButton.addEventListener("click", openModal);

  dialogModal.addEventListener("click", (event) => {
    if (event.target === dialogModal) {
      dialogModal.close();
    }
  });

  dialogModal.addEventListener("close", () => {
    reavealCodeButton.removeEventListener("click", openModal);
  });
};
