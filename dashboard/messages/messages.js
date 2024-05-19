document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('message-input');
    
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();  
            sendMessage();
        }
    });
});

function sendMessage() {
    const input = document.getElementById('message-input');
    const messageText = input.value.trim();
    const feedback = document.getElementById('feedback');

    if (messageText === '') {
        feedback.textContent = 'Please type a message before sending.';
        setTimeout(() => { feedback.textContent = ''; }, 2000); 
        return;
    }

    const chatBox = document.querySelector('.chat-box');
    const message = document.createElement('div');
    message.classList.add('message');
    
    const usernameSpan = document.createElement('span');
    usernameSpan.classList.add('message-username');
    usernameSpan.textContent = 'You: ';
    
    const textSpan = document.createElement('span');
    textSpan.classList.add('message-text');
    textSpan.textContent = messageText;
    
    message.appendChild(usernameSpan);
    message.appendChild(textSpan);
    
    chatBox.appendChild(message);
    
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

