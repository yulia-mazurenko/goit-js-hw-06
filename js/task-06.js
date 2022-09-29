const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onAmountSymbolsExamination)

function onAmountSymbolsExamination(event) {
        
       if (event.currentTarget.value.length !== Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.add('invalid');    
        event.currentTarget.classList.remove('valid'); 
        return   
    }
    event.currentTarget.classList.remove('invalid'); 
    event.currentTarget.classList.add('valid');
}


