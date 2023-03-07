const playerNumberInput = document.getElementById('player-number');
const evenButton = document.getElementById('even-button');
const oddButton = document.getElementById('odd-button');
const aiNumberSpan = document.getElementById('ai-number');
const resultSpan = document.getElementById('result');

// Generate a random number between 1 and 10 for the AI
function generateAINumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Listen for clicks on the even and odd buttons
evenButton.addEventListener('click', function() {
    const playerNumber = parseInt(playerNumberInput.value);
    const aiNumber = generateAINumber();
    aiNumberSpan.textContent = aiNumber;
    const total = playerNumber + aiNumber;
    if (isEven(total)) {
      resultSpan.textContent = 'You win!';
    } else {
      resultSpan.textContent = 'You lose!';
    }
});

oddButton.addEventListener('click', function() {
    const playerNumber = parseInt(playerNumberInput.value);
    const aiNumber = generateAINumber();
    aiNumberSpan.textContent = aiNumber;
    const total = playerNumber + aiNumber;
    if (!isEven(total)) {
      resultSpan.textContent = 'You win!';
    } else {
      resultSpan.textContent = 'You lose!';
    }
});