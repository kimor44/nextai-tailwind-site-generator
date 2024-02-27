// Code Highlighting Elements
export const codeBox = document.querySelector(
  ".code-box-dialog"
) as HTMLElement;

// Pre tag building to insert the highlight code & toolBox
export const pre = document.createElement("pre") as HTMLPreElement;
pre.classList.add(
  "theme-github-dark",
  "shadow-3xl",
  "text-sm",
  "relative",
  "overflow-hidden",
  "max-w-full",
  "tab-size",
  "h-full",
  "bg-[#0d1117]",
  "pt-6"
);

// Highlight code building to insert in the pre tag
export const highlightCode = document.createElement("code") as HTMLElement;
highlightCode.classList.add("hljs");

// ToolBox building to append small and seeButton and insert in the pre tag
export const toolBox = document.createElement("div") as HTMLElement;
toolBox.id = "tool-box";
toolBox.classList.add(
  "flex",
  "justify-between",
  "absolute",
  "bg-stone-800",
  "top-0",
  "w-full"
);

// Span building for language information to append in the toolbox
const span = document.createElement("span") as HTMLElement;
span.classList.add(
  "px-2",
  "py-1",
  "text-white/40",
  "bg-stone-800",
  "uppercase"
);
span.innerText = "html";

// Append span to toolbox
toolBox.appendChild(span);

// Append highlightCode & toolbox to pre parent
pre.appendChild(highlightCode);
pre.appendChild(toolBox);
