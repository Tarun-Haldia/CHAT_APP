// Shooting Star Functionality
document.addEventListener("DOMContentLoaded", () => {
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");
  document.body.appendChild(shootingStar);

  function shootStar() {
    const randomX = Math.random() * window.innerWidth; // Random horizontal position
    const randomY = Math.random() * window.innerHeight; // Random vertical position
    const randomDuration = Math.random() * 2 + 2; // 2s to 4s duration

    shootingStar.style.top = `${randomY}px`;
    shootingStar.style.left = `${randomX}px`;
    shootingStar.style.animation = `shootingStar ${randomDuration}s linear infinite`;
  }

  // Reposition the star every few seconds
  setInterval(shootStar, 3000);
  shootStar(); // Initial position
});

// Chat Application Functionality
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const nextBtn = document.getElementById('next-btn');

// Event listener for sending messages
sendBtn.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message) {
    appendMessage('You', message);
    messageInput.value = '';
  }
});

// Append message to the chat box
function appendMessage(sender, message) {
  const messageDiv = document.createElement('div');
  messageDiv.textContent = `${sender}: ${message}`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
}

// Event listener for "Next" button
nextBtn.addEventListener('click', () => {
  chatBox.innerHTML = ''; // Clear chat box
  appendMessage('System', 'Finding a new partner...');
});
