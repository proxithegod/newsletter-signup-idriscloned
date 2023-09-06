//CALLING THE CONTAINERS
let mainContainer = document.querySelector('main')
let thanksContainer = document.querySelector('.thanks-container')

//CALLING THE BUTTONS
let subscribeButton = document.querySelector('.subscribe-btn')
let dismissButton = document.querySelector('.js-dismiss-btn')

//CALLING THE ERROR MESSAGE
let error = document.querySelector('.validity')

//CALLING EMAIL INPUT
let emailInput = document.querySelector('.emailinput')

//CALLING CHANGING EMAIL
let changedEmail = document.querySelector('.js-dynamic-mail')

function codeToWork() {
    if (emailInput.validity.valid && emailInput.value != '') {
        mainContainer.style.display = 'none';
        thanksContainer.style.display = 'block';
        changedEmail.innerText = emailInput.value;
        
    } else {
        error.style.display = 'block';
        emailInput.style.border = '1px solid red';
    }
}

document.body.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        codeToWork()
    }
});


emailInput.addEventListener('input', () => {
    emailInput.style.border = '';
    error.style.display = 'none';
})

subscribeButton.addEventListener('click', () =>{
    codeToWork();
})

dismissButton.addEventListener('click', () =>{
    thanksContainer.style.display = '';
    mainContainer.style.display = 'flex';
    emailInput.value = '';
})


