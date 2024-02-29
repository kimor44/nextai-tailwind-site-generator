import { BUTTON_CLASSES } from "./buttonClasses";

export type TType = "header";

export class Button extends EventTarget {
  element: HTMLButtonElement;

  constructor() {
    super();
    this.element = document.createElement("button");
  }

  addClassType(type: TType) {
    const classes = this.buttonClasses(type);
    this.element.classList.add(...classes);
  }

  addText(text: string) {
    this.element.innerText = text;
  }

  addNewEventListener(event: string, callback: EventListener) {
    this.element.addEventListener(event, callback);
  }

  addId(id: string) {
    this.element.setAttribute("id", id);
  }

  render() {
    return this.element;
  }

  buttonClasses(type: TType) {
    return BUTTON_CLASSES[type];
  }
}
