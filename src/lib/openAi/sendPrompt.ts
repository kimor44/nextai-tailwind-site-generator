import { openai } from "./openAiKey";

const chatCompletion = (prompt: string) => {
  return openai.chat.completions.create({
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
      Si le prompt ne te demande pas un élément d'un site web, renvoie une erreure dans une balise "div" avec un fond rouge clair et le texte en rouge foncé et gras.
      `,
      },
      { role: "user", content: prompt },
    ],
    model: "gpt-3.5-turbo",
  });
};

export default chatCompletion;
