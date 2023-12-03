export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
export function positionMenu(menu, event) {
  let menuWidth = menu.offsetWidth;
  let menuHeight = menu.offsetHeight;
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  const clickCoordsX = `${event.clientX}`;
  const clickCoordsY = `${event.clientY}`;
  menuWidth = menu.offsetWidth;
  menuHeight = menu.offsetHeight;

  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  if (windowWidth - clickCoordsX < menuWidth) {
    menu.style.left = `${windowWidth - menuWidth}px`;
  } else {
    menu.style.left = `${clickCoordsX}px`;
  }

  if (windowHeight - clickCoordsY < menuHeight) {
    menu.style.top = `${windowHeight - menuHeight}px`;
  } else {
    menu.style.top = `${clickCoordsY}px`;
  }
}

export function closeContextWhenResizeWindow(elem) {
  window.addEventListener("resize", () => {
    elem.close();
  });
}

export function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function startTimer(number, content, container) {  
        
  setInterval(() => {
      if (number >= 0) {
          content.textContent = number;
          number -= 1;            
      } else {
          content.textContent = 'Отсчет завершен!';
          setTimeout(() => {                
              container.remove();
          }, 3000);          
      }
  }, 1000);
}
