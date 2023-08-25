$('#login-form').submit(function (event) {
    const email = $('#email').val();
    const password = $('#password').val();

    if (!isValidEmail(email) || password.length < 6) {
        event.preventDefault();
        alert('Please enter valid email and password (at least 6 characters).');
    }
});

function isValidEmail(email) {
    // Email validation.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



