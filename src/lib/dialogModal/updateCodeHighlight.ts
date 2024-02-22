import { highlightCode, codeBox, pre } from "./codeElements";
import hljs from "./setupHljs";

export const updateCodeHighlight = (code: string) => {
  const html = hljs.highlight(code, { language: "xml" }).value;

  highlightCode.innerHTML = html;
  codeBox.appendChild(pre);
};
