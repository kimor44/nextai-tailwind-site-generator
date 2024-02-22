export const getOpenaiKey = () => {
  const apiKey = localStorage.getItem("openai-key");
  return apiKey;
};
