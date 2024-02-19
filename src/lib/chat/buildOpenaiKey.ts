import { getOpenaiKey } from "./getOpenaiKey";
import { promptOpenaiKey } from "./prompOpenaiKey";

export const buildOpenaiKey = () => {
  let apiKey = getOpenaiKey();

  if (!apiKey) {
    apiKey = promptOpenaiKey();
  }

  return apiKey;
};
