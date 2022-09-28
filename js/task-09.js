
const buttonChangeColorEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.change-color');

buttonChangeColorEl.addEventListener('click', onBodyColorChange);

function onBodyColorChange(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = document.body.style.backgroundColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};