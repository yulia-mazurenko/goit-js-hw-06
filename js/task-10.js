const refs = {
blockRef: document.querySelector('#controls'),
inputRef: document.querySelector('#controls input'),
createButtonRef: document.querySelector('[data-create]'),
destroyButtonRef: document.querySelector('[data-destroy]'),
boxesRef: document.querySelector('#boxes'),
}

refs.createButtonRef.addEventListener('click', getAmount);
refs.destroyButtonRef.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = refs.inputRef.value;
  createBoxes(amount);
};

function createBoxes(amount) {
   
  for (let i = 0; i < amount; i += 1) {

    const startSizeBox = 30;
    
    const divRef = document.createElement('div');
    divRef.classList.add('boxes__item');
    
    divRef.style.width = `${startSizeBox + i * 10}px`;    
    divRef.style.height = `${startSizeBox + i * 10}px`;
    divRef.style.backgroundColor = getRandomHexColor();
    refs.boxesRef.append(divRef);
    
  }

    return refs.boxesRef;
  
}

function destroyBoxes() {
  refs.boxesRef.innerHTML = '';
  refs.inputRef.value = '';  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}