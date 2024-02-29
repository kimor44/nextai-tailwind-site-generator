import { toolBox } from "../../lib/dialogModal/codeElements";
import { Button } from "../../ui/button";

export const appendCopyButton = (finalCode: string) => {
  const buttons = document.getElementsByClassName("copy-button");
  while (buttons.length) {
    buttons[0].remove();
  }

  const copyButton = new Button();
  copyButton.addId("copy-button");
  copyButton.addClassType("copy");
  copyButton.addText("Copy code");
  copyButton.addNewEventListener("click", () => {
    copyButton.setText("Copying..");
    navigator.clipboard.writeText(finalCode);
    copyButton.setText("Copied!");
    setTimeout(() => {
      copyButton.setText("Copy code");
    }, 1000);
  });

  toolBox.appendChild(copyButton.render());
};
