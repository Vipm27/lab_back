const elements = document.querySelectorAll('.transparent');
const button_next = document.querySelector('#next');
const button_prev = document.querySelector('#prev');

let index = 0;

elements[0].className = "active-button"

button_next.addEventListener('click', () => {
  elements[index].className = "transparent";
  index++;

  if (index >= elements.length) {
    index = 0;
  }

  elements[index].className = "active-button";
});

button_prev.addEventListener('click', () => {
  elements[index].className = "transparent";
  index--;

  if (index < 0) {
    index = elements.length -1;
  }

  elements[index].className = "active-button";
});