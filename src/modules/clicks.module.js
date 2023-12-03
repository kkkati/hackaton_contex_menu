import { Module } from "../core/module";

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  trigger() {
    event.stopPropagation();
    let i = 0;
    setTimeout(() => {
      alert(`Вы кликнули ${i} раз`);
    }, 5000);
    document.body.addEventListener("click", () => {
      i++;
    });
  }
}
