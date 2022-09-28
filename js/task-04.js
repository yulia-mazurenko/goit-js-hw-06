
let counterValue = 0;

const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const incrementButtonEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('[id="value"]');

decrementButtonEl.addEventListener('click', onDecrementButtonClick);
incrementButtonEl.addEventListener('click', onIncrementButtonClick);


function onDecrementButtonClick() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}

function onIncrementButtonClick() {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}

