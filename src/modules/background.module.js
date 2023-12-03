import {Module} from '../core/module'
import { getRandomColor } from '../utils'

export class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    randomColor() {
        const randomColorHTML = this.toHTML();
        const menuClass = document.querySelector('.menu');
        menuClass.append(randomColorHTML); 
        return randomColorHTML;               
    }

    trigger() {
        const randomColorHTML = this.randomColor();
        randomColorHTML.addEventListener('click', () => {
            document.body.style.background = getRandomColor();
        })
    }


}