import { Button } from "../../ui/button";

export const hideForm = () => {
  const oldHideFormButton = document.getElementById("hide-form");
  if (oldHideFormButton) return oldHideFormButton;

  const hideFormButton = new Button();
  hideFormButton.addClassType("header");
  hideFormButton.addText("hide form");
  hideFormButton.addId("hide-form");
  hideFormButton.addNewEventListener("click", () => {
    const fieldset = document.getElementById(
      "generator-wrapper"
    ) as HTMLFormElement;
    const text = hideFormButton.element?.innerText;
    hideFormButton.element!.innerText =
      text === "hide form" ? "show form" : "hide form";
    fieldset.classList.toggle("hidden");
  });

  return hideFormButton.render();
};
