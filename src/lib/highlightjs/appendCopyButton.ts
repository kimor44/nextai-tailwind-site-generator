import { toolBox } from "./codeElements";

export const appendCopyButton = (finalCode: string) => {
  const button = document.querySelector(".copy-button");

  if (button) return;

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

  copyButton.addEventListener("click", function () {
    copyButton.innerText = "Copying..";

    navigator.clipboard.writeText(finalCode);

    copyButton.innerText = "Copied!";

    setTimeout(function () {
      copyButton.innerText = "Copy";
    }, 1000);
  });

  toolBox.prepend(copyButton);
};
