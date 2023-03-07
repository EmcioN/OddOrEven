// Generate a random number 

function generateAINumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// Check if a number is even

function isEven(number) {
    return number % 2 === 0;
}

// Event listeners for both buttons

const evenButton = document.getElementById('even-button');
const oddButton = document.getElementById('odd-button');
const aiNumberSpan = document.getElementById('ai-number');
const resultSpan = document.getElementById('result');

evenButton.addEventListener('click', function() {    
    const aiNumber = generateAINumber();
    aiNumberSpan.textContent = aiNumber;    
    if (isEven(aiNumber)) {
      resultSpan.textContent = 'You win!';
    } else {
      resultSpan.textContent = 'You lose!';
    }
});

oddButton.addEventListener('click', function() {    
    const aiNumber = generateAINumber();
    aiNumberSpan.textContent = aiNumber;    
    if (!isEven(aiNumber)) {
      resultSpan.textContent = 'You win!';
    } else {
      resultSpan.textContent = 'You lose!';
    }
});