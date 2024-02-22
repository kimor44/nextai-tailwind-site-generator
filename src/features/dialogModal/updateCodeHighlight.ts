import {
  highlightCode,
  codeBox,
  pre,
} from "../../lib/dialogModal/codeElements";
import hljs from "../../lib/dialogModal/setupHljs";

export const updateCodeHighlight = (code: string) => {
  const html = hljs.highlight(code, { language: "xml" }).value;

  highlightCode.innerHTML = html;
  codeBox.appendChild(pre);
};
