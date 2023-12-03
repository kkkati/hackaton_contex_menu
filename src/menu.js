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

      // const menuItem = document.createElement("li"); //проверка работы кода
      // menuItem.className = "menu-item"; //проверка работы кода
      // menuItem.textContent = `Мой список`; //проверка работы кода
      // this.el.append(menuItem); //проверка работы кода
      console.log(this.el); //проверка работы кода
      // console.log("Все работает"); //проверка работы кода
    });
  }
  close() {
    this.el.classList.remove("open");
  }
  add(module) {
    this.el.append(module.toHTML()); //проверить после написания модулей
  }
}
