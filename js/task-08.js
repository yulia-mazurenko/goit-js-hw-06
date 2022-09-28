
const formEL = document.querySelector('.login-form');

formEL.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements
  
    if (formElements.email.value === '' ||
        formElements.password.value === '') {
     
        alert("Все поля формы должны быть заполнены")
    }

    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        email, password,
    }

    console.log(formData);

    event.currentTarget.reset();


    //через formData
    
    // const formData = new FormData(event.currentTarget);
    // const formEl = {};
    
    // formData.forEach((value, name) => {
       
    //     formEl[name] = value;
    // });

    // console.log(formEl);

    // event.currentTarget.reset();
}