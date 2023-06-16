const inputName = document.querySelector('#name-input')
const spanName = document.querySelector('#name-output')

function handlerInputName(evt) {
    if (evt.currentTarget.value) {
        spanName.textContent = evt.currentTarget.value.trim()
    } else {
        spanName.textContent = "Anonymous"
    }
}

inputName.addEventListener('input', handlerInputName)
