import { toolBox } from "./codeElements";

export const appendCopyButton = (finalCode: string) => {
  const button = document.getElementById("copy-button") as HTMLButtonElement;

  if (button) {
    button.remove();
  }

  const copyButton = document.createElement("button") as HTMLButtonElement;
  copyButton.classList.add(
    "rounded-bl-md",
    "px-2",
    "py-1",
    "bg-black/30",
    "uppercase",
    "font-bold",
    "text-xs",
    "text-stone-50",
    "copy-button"
  );

  copyButton.innerHTML = "Copy";

  copyButton.addEventListener("click", () => {
    copyButton.innerText = "Copying..";

    navigator.clipboard.writeText(finalCode);

    copyButton.innerText = "Copied!";

    setTimeout(() => {
      copyButton.innerText = "Copy";
    }, 1000);
  });

  toolBox.prepend(copyButton);

  const buttons = document.getElementsByClassName("copy-button");
  while (buttons.length > 1) {
    buttons[buttons.length - 1].remove();
  }
};
