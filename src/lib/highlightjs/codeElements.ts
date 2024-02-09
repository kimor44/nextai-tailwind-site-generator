export const codeBox = document.querySelector(".code-box") as HTMLElement;
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
export const highlightCode = document.createElement("code") as HTMLElement;
highlightCode.classList.add("hljs");
export const toolBox = document.createElement("div") as HTMLElement;
toolBox.classList.add("flex", "absolute", "top-0", "right-0", "gap-2");
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
span.textContent = "Language:";
small.appendChild(span);
small.appendChild(document.createTextNode("HTML"));
toolBox.appendChild(small);
pre.appendChild(highlightCode);
pre.appendChild(toolBox);
