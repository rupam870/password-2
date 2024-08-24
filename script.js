function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "123456";
    const errorMessage = document.getElementById("error-message");

    if (password === correctPassword) {
        window.location.href = "https://rupamgumber.framer.website/clearfeed";
    } else {
        errorMessage.textContent = "Incorrect password.";
    }
}

function goBack() {
    window.location.href = "https://rupamgumber.framer.website/";
}

const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");
const eyeIcon = document.getElementById("eyeIcon");

togglePassword.addEventListener("click", function () {
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    // Change the eye icon depending on the password visibility
    if (type === "password") {
        eyeIcon.src = "eye-slash-icon.svg"; // change to eye icon
    } else {
        eyeIcon.src = "eye-icon.svg"; // change to eye slash icon
    }
});
