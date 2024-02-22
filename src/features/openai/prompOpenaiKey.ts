export const promptOpenaiKey = () => {
  const openaiKey = prompt("Please enter your OpenAI API key");
  if (openaiKey) {
    localStorage.setItem("openai-key", openaiKey as string);
  }
  return openaiKey;
};
