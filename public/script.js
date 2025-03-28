const chatbox = document.getElementById('chatbox');

async function sendMessage() {
    const message = prompt('Ask about Vedansh\'s portfolio:');
    if (!message) return;

    const response = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    });

    const data = await response.json();
    chatbox.innerHTML += `<p>You: ${message}</p>`;
    chatbox.innerHTML += `<p>Bot: ${data.reply}</p>`;
}
