function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();  // Get the message text and trim any extra whitespace

    if (message === "") {
        // Optionally provide feedback if the message is empty
        document.getElementById('feedback').textContent = "Please type a message before sending.";
        return;
    } else {
        document.getElementById('feedback').textContent = "";  // Clear any feedback messages
    }

    const chatBox = document.querySelector('.chat-box');
    const messageElement = document.createElement('div');  // Create a new div for the message
    messageElement.className = 'message';  // Set the class for styling

    // Assuming you want to show some username, you can either fetch it or set it statically
    const username = "You";  // Static username, you might want to dynamically fetch this

    // Set the inner HTML of the message element
    messageElement.innerHTML = `<span class="message-username">${username}:</span><span class="message-text">${message}</span>`;

    // Append the new message to the chat box
    chatBox.appendChild(messageElement);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear the input field after sending the message
    input.value = '';
}

// Optional: You can add an event listener for the 'Enter' key press inside the input field
document.getElementById('message-input').addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        sendMessage();  // Call the sendMessage function when Enter key is pressed
        event.preventDefault();  // Prevent the default action to avoid form submission
    }
});
