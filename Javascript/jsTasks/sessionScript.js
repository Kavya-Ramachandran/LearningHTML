const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const logoutBtn = document.getElementById("logoutBtn");
const statusPara = document.getElementById("status");
const title = document.getElementById("title");

window.onload = () => {
    const user = sessionStorage.getItem("user");
    if (user) {
        showLoggedin(user);
    }
};
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    if (username) {
        sessionStorage.setItem("user", username);
        showLoggedin(username);
    }
});
logoutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("user");
    location.reload();
});
function showLoggedin(user) {
    loginForm.style.display = "none";
    title.textContent = "Welcome!";
    statusPara.textContent = `You are logged AS ${user}`;
}
