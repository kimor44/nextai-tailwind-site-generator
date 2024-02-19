import { openai } from "./openAiKey";
import { promptSystem } from "./promptSystem";

export const chatCompletion = async (prompt: string, key: string) => {
  const ff = await openai(key).chat.completions.create({
    model: "gpt-4-0125-preview",
    stream: true,
    temperature: 1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 1500,
    messages: [
      {
        role: "system",
        content: promptSystem,
      },
      { role: "user", content: prompt },
    ],
  });

  return ff;
};
