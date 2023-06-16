const input = document.querySelector('#validation-input');

function handlerInputCheck() {
    const inputValue = input.value.trim();
    const inputCheck = Number(input.getAttribute('data-length'))
    if (inputValue.length === inputCheck) {
        input.classList.add("valid")
        input.classList.remove('invalid')
    } else {
        input.classList.add("invalid")
        input.classList.remove('valid')
    }
}

input.addEventListener('blur', handlerInputCheck)