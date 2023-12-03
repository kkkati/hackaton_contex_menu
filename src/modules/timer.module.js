import { Module } from "../core/module";
import { startTimer } from "../utils";

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.timerContainer = document.createElement("div");
    this.timerHTML = document.createElement("h3");
  }

  render() {
    this.timerContainer.id = "timer";
    this.timerHTML.className = "timer-text";
    this.timerContainer.append(this.timerHTML);
    const numberTimer = prompt("Задайте начальное время отсчета");
    startTimer(numberTimer, this.timerHTML, this.timerContainer);
    console.log(this.timerHTML);
    return this.timerContainer;
  }

  trigger() {
    const timerBlockHtml = this.render();
    document.body.append(timerBlockHtml);
  }
}
