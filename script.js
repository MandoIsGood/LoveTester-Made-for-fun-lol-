// Retrieve stored names and display them
const storedYourName = localStorage.getItem('yourName');
const storedCrushName = localStorage.getItem('crushName');

if (storedYourName && storedCrushName) {
    // Replace the input fields with stored names
    document.getElementById('yourName').innerHTML = storedYourName;
    document.getElementById('crushName').innerHTML = storedCrushName;
}

const loveForm = document.getElementById('loveForm');
const resultDiv = document.getElementById('result');
const fillBar = document.querySelector('.fill');
const percentageElement = document.createElement('div');
percentageElement.classList.add('percentage');
fillBar.appendChild(percentageElement);

loveForm.addEventListener('submit', calculateLovePercentage);

function calculateLovePercentage(e) {
    e.preventDefault();

    const yourName = document.getElementById('yourName').value;
    const crushName = document.getElementById('crushName').value;

    // Store the names in localStorage
    localStorage.setItem('yourName', yourName);
    localStorage.setItem('crushName', crushName);

    const lovePercentage = Math.floor(Math.random() * 101);

    fillBar.style.width = '0%';
    setTimeout(() => {
        fillBar.style.width = `${lovePercentage}%`;
        percentageElement.textContent = `${lovePercentage}%`;
    }, 500);

    setTimeout(redirectToMessage, 3000, yourName, crushName, lovePercentage);
}

function redirectToMessage(yourName, crushName, lovePercentage) {
    const messageUrl = `message.html?yourName=${encodeURIComponent(yourName)}&crushName=${encodeURIComponent(crushName)}&lovePercentage=${lovePercentage}`;
    window.location.href = messageUrl;
}
