const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');


inputEl.addEventListener('input', onTextStyleChange);

function onTextStyleChange(event) {
   
    spanEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
}