export const promptOpenaiKey = () => {
  const openaiKey = prompt(
    "Please enter your OpenAI API key. It must be prepaid."
  );
  if (openaiKey) {
    localStorage.setItem("openai-key", openaiKey as string);
  }
  return openaiKey;
};
