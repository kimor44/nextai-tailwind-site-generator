const input = document.querySelector("#generator") as HTMLInputElement;
input.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget as HTMLFormElement);
  const prompt = formData.get("generator__textarea") as string;
  alert(prompt);
});
