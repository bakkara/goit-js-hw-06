const form = document.querySelector('.login-form');

function handlerSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (email.value === '' || password.value === '') {
        alert('Усі поля мають бути заповнені')
    } else {
        const data = {
            email: email.value,
            password: password.value
        }
        console.log(data)
        form.reset()
    }
}

form.addEventListener('submit', handlerSubmit)