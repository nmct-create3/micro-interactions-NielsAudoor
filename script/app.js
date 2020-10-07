function handleFloatingLabel() {

}

function handlePasswordSwitcher() {
    var passwordToggle = document.getElementById('togglePassword')
    const passwordOptions = ['password', 'text'];
    var passwordInput = document.getElementById('password')

    passwordToggle.addEventListener('change', function () {
        passwordInput.type = passwordOptions[+this.checked];
        console.log(this.checked)
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');

    handleFloatingLabel();
    handlePasswordSwitcher();
});