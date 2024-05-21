document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".login-button").addEventListener("click", function() {
        const username = document.querySelector("input[name='username']").value;
        localStorage.setItem("username", username);
    });
});
