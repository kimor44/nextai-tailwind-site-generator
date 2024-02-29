import { TType } from "./button";

export const BUTTON_CLASSES: { [key in TType]: string[] } = {
  header: [
    "bg-gray-800",
    "disabled:bg-gray-600",
    "text-white",
    "disabled:text-slate-400",
    "disabled:cursor-not-allowed",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
  ],
};
