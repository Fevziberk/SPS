document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".login-button").addEventListener("click", function() {
        const username = document.querySelector("input[name='username']").value;
        localStorage.setItem("username", username);
        localStorage.setItem("userType", "student");  // Store user type
        window.location.href = './dashboard/dashboard.html';    // Redirect to home page
    });
});
