export const hideForm = () => {
  const oldHideFormButton = document.getElementById("hide-form");
  if (oldHideFormButton) return oldHideFormButton;

  const hideFormButton = document.createElement("button");
  hideFormButton.id = "hide-form";
  hideFormButton.innerText = "Hide form";
  hideFormButton.classList.add(
    "bg-black",
    "disabled:bg-slate-600",
    "text-white",
    "disabled:text-slate-300",
    "disabled:cursor-not-allowed",
    "font-bold",
    "py-2",
    "px-4",
    "rounded"
  );

  const fieldset = document.getElementById(
    "generator-wrapper"
  ) as HTMLFormElement;
  hideFormButton.addEventListener("click", () => {
    const text = hideFormButton.innerText;
    hideFormButton.innerText = text === "Hide form" ? "Show form" : "Hide form";
    fieldset.classList.toggle("hidden");
  });

  return hideFormButton;
};
