import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { openai } from "./openai";

export const chatCompletion = async (
  key: string,
  messages: ChatCompletionMessageParam[]
) => {
  const ff = await openai(key).chat.completions.create({
    model: "gpt-4-0125-preview",
    stream: true,
    temperature: 1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 1500,
    messages: messages,
  });

  return ff;
};
