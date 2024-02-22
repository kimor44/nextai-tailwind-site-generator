export const hideForm = () => {
  const hideFormButton = document.getElementById(
    "hide-form"
  ) as HTMLButtonElement;
  const fieldset = document.getElementById(
    "generator-wrapper"
  ) as HTMLFormElement;
  hideFormButton.addEventListener("click", () => {
    fieldset.classList.toggle("hidden");
  });
};
