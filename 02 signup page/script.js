$('#signup-form').submit(function (event) {
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const email = $('#email').val();
    const password = $('#password').val();
    const confirmPassword = $('#confirmPassword').val();

    if (!isValidEmail(email) || password.length < 6 || password !== confirmPassword) {
        event.preventDefault();
        alert('Please enter valid email, a password of at least 6 characters, and make sure passwords match.');
    }
});

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}


