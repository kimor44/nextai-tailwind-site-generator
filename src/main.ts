import chatCompletion from "./lib/openAi/sendPrompt";

const iframe = document.querySelector("#iframe-generated") as HTMLIFrameElement;

const input = document.querySelector("#generator") as HTMLInputElement;
input.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget as HTMLFormElement);
  const prompt = formData.get("generator__textarea") as string;
  const response = await chatCompletion(prompt);
  const content = response.choices[0].message.content;
  if (!content) return;

  iframe.srcdoc = `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Generated code with AI</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        ${content}
      </body>
    </html>`;
});
