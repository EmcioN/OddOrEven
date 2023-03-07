// Set Player name 

const form = document.getElementById('player-form');
const nameInput = document.getElementById('name');
const playerHeading = document.getElementsByTagName('h2')[2];
const marbleColor = document.getElementById('color-picker');
const playerMarble = document.getElementById('marble-color');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const playerName = nameInput.value;
  playerHeading.innerText = `${playerName}`
  const marble = marbleColor.value;
  playerMarble.style.backgroundColor = marble;
});

// Starting marbles

document.getElementById("player-marbles-count").textContent = "20";
let playerMarblesCount = document.getElementById("player-marbles-count")
document.getElementById("ai-marbles-count").textContent = "20";
let aiMarblesCount = document.getElementById("ai-marbles-count")

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
const playerNumber = document.getElementById('player-number');

evenButton.addEventListener('click', function() {    
    const aiNumber = generateAINumber();
    aiNumberSpan.textContent = aiNumber;    
    if (isEven(aiNumber)) {
      playerNumber += playerMarblesCount;
      resultSpan.textContent = 'You win!';
    } else {
      playerMarblesCount -= aiNumber;
      aiNumber += aiMarblesCount;
      resultSpan.textContent = 'You lose!';
    }
    updateMarbleCounts()
});

oddButton.addEventListener('click', function() {    
    const aiNumber = generateAINumber();
    aiNumberSpan.textContent = aiNumber;    
    if (!isEven(aiNumber)) {
      playerNumber += playerMarblesCount;
      resultSpan.textContent = 'You win!';
    } else {
      playerMarblesCount -= aiNumber;
      aiNumber += aiMarblesCount;
      resultSpan.textContent = 'You lose!';
    }
    updateMarbleCounts()
});

// Marble count updater

