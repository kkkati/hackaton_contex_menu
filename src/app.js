import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { TimerModule } from "./modules/timer.module";
import "./styles.css";

const contextMenu = new ContextMenu(".menu");
contextMenu.open();

//добавляем background
const background = new BackgroundModule("background", "Изменить цвет фона");
contextMenu.add(background);
const backgroundItem = document.querySelector(`li[data-type="background"`);
backgroundItem.addEventListener("click", (event) => {
  background.trigger();
});

//добавляем clicks
const clicks = new ClicksModule("clicks", "Считать клики (5 секунд)");
contextMenu.add(clicks);
const clicksItem = document.querySelector(`li[data-type="clicks"`);
clicksItem.addEventListener("click", (event) => {
  clicks.trigger();
});

//добавляем таймер
const timer = new TimerModule("timer", "Таймер");
contextMenu.add(timer);
const timerItem = document.querySelector(`li[data-type="timer"`);
timerItem.addEventListener("click", (event) => {
  timer.trigger();
});
