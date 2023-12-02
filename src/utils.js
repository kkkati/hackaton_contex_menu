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
    menu.style.top = `${windowHeight - menuHeight - 35}px`;
  } else {
    menu.style.top = `${clickCoordsY}px`;
  }
}
