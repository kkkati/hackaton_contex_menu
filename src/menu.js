import { Menu } from "./core/menu";
import { positionMenu, closeContextWhenResizeWindow } from "./utils";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }
  open() {
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      this.el.classList.add("open");
      positionMenu(this.el, event);
      closeContextWhenResizeWindow(this);
    });
  }
  close() {
    this.el.classList.remove("open");
  }
  add(module) {
    this.el.insertAdjacentHTML("beforeend", module.toHTML());
  }
}
