import { openai } from "./lib/openAi/openAiKey";
import { updateCodeHighlight } from "./lib/highlightjs/updateCodeHighlight";
import { appendCopyButton } from "./lib/highlightjs/appendCopyButton";

const iframe = document.querySelector("#iframe-generated") as HTMLIFrameElement;
const input = document.querySelector("#generator") as HTMLInputElement;
input.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget as HTMLFormElement);
  const prompt = formData.get("generator__textarea") as string;
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Tu crées des sites web.
      Tu es un développeur web.
      Ta tâche est de créer un site web avec tailwindcss.
      Tu ne renvoies que du code HTML.
      Tu ne mets rien avant et après le code HTML.
      Tu ne mets pas de commentaire dans le code HTML.
      Tu ne mets pas de Markdown dans le code HTML.
      Tu ne mets pas de backticks dans le code HTML. (avant et après le code HTML)
      Si le prompt ne te demande pas un élément d'un site web, renvoie une erreure dans une balise "div" avec un fond rouge clair et le texte en rouge foncé et gras.
      `,
      },
      { role: "user", content: prompt },
    ],
    model: "gpt-3.5-turbo",
    stream: true,
  });

  let code = "";
  const onNewChunk = createUpdateIframe();

  for await (const chunk of chatCompletion) {
    const newChunk = chunk.choices[0]?.delta?.content || "";
    code += newChunk;
    onNewChunk(code);
  }

  appendCopyButton(code);
});

const createUpdateIframe = () => {
  let date = Date.now();
  let timeout: any = null;

  return (code: string) => {
    if (Date.now() - date > 1000) {
      updateIframe(code);
      updateCodeHighlight(code);
      date = Date.now();
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        updateIframe(code);
        updateCodeHighlight(code);
        date = Date.now();
      }, 1000);
    }
  };
};

const updateIframe = (code: string) => {
  iframe.srcdoc = `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Generated code with AI</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body id="body-generated" class="body-generated">
        ${code}
      </body>
    </html>`;
};
