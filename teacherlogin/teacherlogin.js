document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".login-button").addEventListener("click", function() {
        const username = document.querySelector("input[name='username']").value;
        localStorage.setItem("username", username);
        localStorage.setItem("userType", "teacher");  // Store user type
        window.location.href = '../home/home.html';   // Redirect to home page
    });
});
