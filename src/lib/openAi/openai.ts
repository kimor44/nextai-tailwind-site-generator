import OpenAI from "openai";

export const openai = (key: string) => {
  const open = new OpenAI({
    apiKey: key,
    dangerouslyAllowBrowser: true,
  });

  return open;
};
