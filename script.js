const container = document.getElementById('form-wrapper');
const signupSwitch = document.getElementById('signupSwitch');
const signinSwitch = document.getElementById('signinSwitch');

signupSwitch.addEventListener('click', () => {
    container.classList.add("active");
});

signinSwitch.addEventListener('click', () => {
    container.classList.remove("active");
});
