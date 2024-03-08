import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { openai } from "./openai";

export type TChatError = {
  error: string;
};

const chatErrorMessage: TChatError = {
  error:
    "An error occurred while trying to complete the chat. Please enter a valid openai key.",
};

export const chatCompletion = async (
  key: string,
  messages: ChatCompletionMessageParam[]
) => {
  try {
    const result = await openai(key).chat.completions.create({
      model: "gpt-4-0125-preview",
      stream: true,
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 1500,
      messages: messages,
    });

    return result;
  } catch (error) {
    return chatErrorMessage;
  }
};
