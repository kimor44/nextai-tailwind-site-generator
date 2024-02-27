import { toolBox } from "../../lib/dialogModal/codeElements";

export const appendCopyButton = (finalCode: string) => {
  const button = document.getElementById("copy-button") as HTMLButtonElement;

  if (button) {
    button.remove();
  }

  const copyButton = document.createElement("button") as HTMLButtonElement;
  copyButton.classList.add(
    "px-2",
    "py-1",
    "bg-stone-800",
    "text-white/40",
    "text-xs",
    "copy-button"
  );

  copyButton.innerHTML = "Copy code";

  copyButton.addEventListener("click", () => {
    copyButton.innerText = "Copying..";

    navigator.clipboard.writeText(finalCode);

    copyButton.innerText = "Copied!";

    setTimeout(() => {
      copyButton.innerText = "Copy code";
    }, 1000);
  });

  toolBox.appendChild(copyButton);

  const buttons = document.getElementsByClassName("copy-button");
  while (buttons.length > 1) {
    buttons[buttons.length - 1].remove();
  }
};
