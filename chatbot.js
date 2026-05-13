// 1. Question Bank (Array of Objects)
const questionBank = [
    { key: "coffee", response: "We serve premium Arabica beans roasted locally!" },
    { key: "dessert", response: "Our cheesecake and brownies are baked fresh every morning." },
    { key: "discount", response: "Students get 10% off with a valid ID card!" },
    { key: "hours", response: "We are open from 8:00 AM to 8:00 PM daily." }
];

const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

// 2. Event Handling
chatForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page refresh
    
    const text = userInput.value.toLowerCase().trim();
    if (text === "") return;

    // Add User Message to UI
    addMessage(text, 'user-msg');

    // Find Bot Response
    const found = questionBank.find(item => text.includes(item.key));
    const botResponse = found ? found.response : "I'm sorry, I don't understand that. Try 'coffee' or 'hours'.";

    // Add Bot Message to UI after a small delay
    setTimeout(() => {
        addMessage(botResponse, 'bot-msg');
    }, 500);

    // 3. Clear Input
    userInput.value = "";
});

// 4. Dynamic DOM Updates
function addMessage(text, className) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add(className);
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);

    // Auto-scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}