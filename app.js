const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// error message function
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// event listners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // check if username input is empty
    if (username.value === '') {
        showError(username, 'user name required');
    } else {
        showSuccess(username)
    }

    // check if email input is empty
    if (email.value === '') {
        showError(email, 'email required');
    } else {
        showSuccess(email)
    }

    // check if password input is empty
    if (password.value === '') {
        showError(password, 'password name required');
    } else {
        showSuccess(password)
    }

    // check if password2 input is empty
    if (password2.value === '') {
        showError(password2, 'password name required');
    } else {
        showSuccess(password2)
    }

})