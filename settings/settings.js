document.addEventListener("DOMContentLoaded", function() {
    // Display username from local storage if available
    let storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        document.getElementById('usernameDisplay').innerText = storedUsername;
    }
});

function toggleVisibility(section) {
    let input, submitButton;
    if (section === 'username') {
        input = document.getElementById('usernameInput');
        submitButton = document.getElementById('submitUsername');
    } else if (section === 'password') {
        input = document.getElementById('passwordInput');
        submitButton = document.getElementById('submitPassword');
    } else if (section === 'mail') {
        input = document.getElementById('mailInput');
        submitButton = document.getElementById('submitMail');
    }
    
    if (input.style.display === 'none') {
        input.style.display = 'block';
        submitButton.style.display = 'block';
    } else {
        input.style.display = 'none';
        submitButton.style.display = 'none';
    }
}

function changeUsername() {
    let username = document.getElementById('usernameInput').value;
    if (username) {
        localStorage.setItem('username', username);
        document.getElementById('usernameDisplay').innerText = username;
        alert("Username changed successfully!");
    }
}

function changePassword() {
    alert("Password changed successfully!");
}

function changeMail() {
    alert("Email changed successfully!");
}
function sendNotification() {
    alert("StudentPlanningSystem_IT@gmail.com");
}