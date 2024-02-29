import { toolBox } from "../../lib/dialogModal/codeElements";

export const appendCopyButton = (finalCode: string) => {
  const buttons = document.getElementsByClassName("copy-button");
  while (buttons.length) {
    buttons[0].remove();
  }

  const copyButton = document.createElement("button") as HTMLButtonElement;
  copyButton.id = "copy-button";
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
};
