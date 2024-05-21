document.addEventListener("DOMContentLoaded", function() {
    const username = localStorage.getItem("username");
    document.getElementById("username").textContent = username;

    document.querySelector(".schedule-button").addEventListener("click", function() {
        const userType = localStorage.getItem("userType");
        if (userType === "teacher") {
            window.location.href = '/schedule/schedule.html';
        } else if (userType === "student") {
            window.location.href = '/schedulestudent/schedulestudent.html';
        }
    });
});
