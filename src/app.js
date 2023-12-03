import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import "./styles.css";

const contextMenu = new ContextMenu(".menu");
contextMenu.open();
const background = new BackgroundModule("background", "Изменить цвет фона");
contextMenu.add(background);
