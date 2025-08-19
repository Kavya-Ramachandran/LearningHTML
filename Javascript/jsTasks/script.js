const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberMeCheckbox = document.getElementById("rememberMe");
const statusPara = document.getElementById("status");
window.onload = () => {
    const savedUsername = localStorage.getItem("savedUsername");
    if (savedUsername) {
        usernameInput.value = savedUsername;
        rememberMeCheckbox.checked = true;
        statusPara.textContent = `Welcome back, ${savedUsername}!`;
    }
};
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    if (username === "admin" && password === "1234") {
        if (rememberMeCheckbox.checked) {
            localStorage.setItem("saved username:", username);
        } else {
            localStorage.removeItem("saved username");
        }
        statusPara.textContent = `login successful! Hello, ${username}.`;
    } else {
        statusPara.textContent = "invalid credentials.";
    }
});
