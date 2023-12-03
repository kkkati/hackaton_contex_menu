import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import "./styles.css";

const menuItemArray = [];
const contextMenu = new ContextMenu(".menu");
contextMenu.open();
const background = new BackgroundModule("background", "Изменить цвет фона");
contextMenu.add(background);
contextMenu.el.addEventListener("click", (event) => {
  background.trigger();
});
