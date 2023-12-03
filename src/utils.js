export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
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