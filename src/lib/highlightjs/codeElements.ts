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
  "pt-4"
);

// Highlight code building to insert in the pre tag
export const highlightCode = document.createElement("code") as HTMLElement;
highlightCode.classList.add("hljs");

// ToolBox building to append small and seeButton and insert in the pre tag
export const toolBox = document.createElement("div") as HTMLElement;
toolBox.classList.add("flex", "absolute", "top-0", "right-0", "gap-2");

// Small tag building to display the language
const small = document.createElement("small") as HTMLElement;
small.classList.add(
  "rounded-bl-md",
  "px-2",
  "py-1",
  "bg-black/30",
  "uppercase",
  "font-bold",
  "text-xs",
  "text-stone-50"
);
const span = document.createElement("span") as HTMLElement;
span.classList.add("sr-only");
span.innerText = "Language:";
small.appendChild(span);
small.appendChild(document.createTextNode("HTML"));

// Append small tag to toolBox
toolBox.appendChild(small);

// Append highlightCode & toolbox to pre parent
pre.appendChild(highlightCode);
pre.appendChild(toolBox);
