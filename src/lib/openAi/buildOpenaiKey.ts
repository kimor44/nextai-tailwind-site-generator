import { getOpenaiKey } from "./getOpenaiKey";
import { promptOpenaiKey } from "../../features/openai/prompOpenaiKey";

export const buildOpenaiKey = () => {
  let apiKey = getOpenaiKey();

  if (!apiKey) {
    apiKey = promptOpenaiKey();
  }

  return apiKey;
};
