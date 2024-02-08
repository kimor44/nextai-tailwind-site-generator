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
  "h-full"
);
export const highlightCode = document.createElement("code") as HTMLElement;
highlightCode.classList.add("hljs");
const small = document.createElement("small") as HTMLElement;
small.classList.add(
  "bg-black/30",
  "absolute",
  "top-0",
  "right-0",
  "uppercase",
  "font-bold",
  "text-xs",
  "text-stone-50",
  "rounded-bl-md",
  "px-2",
  "py-1"
);
const span = document.createElement("span") as HTMLElement;
span.classList.add("sr-only");
span.textContent = "Language:";
small.appendChild(span);
small.appendChild(document.createTextNode("HTML"));
pre.appendChild(highlightCode);
pre.appendChild(small);
