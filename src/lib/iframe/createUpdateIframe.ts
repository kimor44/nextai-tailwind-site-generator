import { updateIframe } from "./updateIframe";

export const createUpdateIframe = () => {
  let date = Date.now();
  let timeout: any = null;

  return (code: string) => {
    if (Date.now() - date > 1000) {
      updateIframe(code);
      date = Date.now();
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        updateIframe(code);
        date = Date.now();
      }, 1000);
    }
  };
};
