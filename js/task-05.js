const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output')

inputEl.addEventListener('input', onSpanChange);

function onSpanChange(event) {
    
    spanEl.textContent = event.currentTarget.value;

}
