export const kebabButton = () => {
  const kebabButton = document.getElementById("kebab-button");

  kebabButton?.addEventListener("click", () => {
    const nav = document.getElementById("actions-box");
    const classes = [
      "hidden",
      "flex",
      "flex-col",
      "absolute",
      "top-20",
      "right-0",
      "z-10",
      "bg-white",
      "border",
      "border-gray-300",
      "rounded-md",
      "shadow-lg",
      "overflow-scroll",
      "w-full",
      "h-screen-7/10",
      "text-gray-700",
      "text-sm",
      "font-medium",
      "hover:bg-gray-100",
    ];
    classes.forEach((className) => {
      nav?.classList.toggle(className);
    });
  });
};
