// script.js
const symbols = ['🍒', '🍋', '🔔', '⭐'];
let points = 0;

// Function to spin the reels
function spinReels() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const resultMessage = document.getElementById('resultMessage');
    
    const spinDuration = 1000; // Duration of the spinning effect

    // Start spinning effect
    let startTime = Date.now();
    let spinning = true;

    function animate() {
        if (spinning) {
            let elapsedTime = Date.now() - startTime;
            if (elapsedTime >= spinDuration) {
                spinning = false;
                endSpin();
            } else {
                // Randomly update the reels
                reel1.textContent = symbols[Math.floor(Math.random() * symbols.length)];
                reel2.textContent = symbols[Math.floor(Math.random() * symbols.length)];
                reel3.textContent = symbols[Math.floor(Math.random() * symbols.length)];
                requestAnimationFrame(animate);
            }
        }
    }

    function endSpin() {
        // Stop the reels on random symbols
        reel1.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        reel2.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        reel3.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        evaluateResult();
    }

    animate();
}

// Function to evaluate the result
function evaluateResult() {
    const reel1 = document.getElementById('reel1').textContent;
    const reel2 = document.getElementById('reel2').textContent;
    const reel3 = document.getElementById('reel3').textContent;
    const resultMessage = document.getElementById('resultMessage');

    if (reel1 === reel2 && reel2 === reel3) {
        points += 50;
        resultMessage.textContent = `You won 50 points!`;
    } else if (reel1 === reel2 || reel2 === reel3 || reel1 === reel3) {
        points += 10;
        resultMessage.textContent = `You won 10 points!`;
    } else {
        resultMessage.textContent = `No match, try again!`;
    }

    updatePointsDisplay();
}

// Function to update the points display
function updatePointsDisplay() {
    const pointsDisplay = document.getElementById('pointsDisplay');
    pointsDisplay.textContent = `Points: ${points}`;
}

// Function to reset the game
function resetGame() {
    points = 0;
    updatePointsDisplay();
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('reel1').textContent = '';
    document.getElementById('reel2').textContent = '';
    document.getElementById('reel3').textContent = '';
}

// Event listeners for buttons
document.getElementById('spinButton').addEventListener('click', spinReels);
document.getElementById('resetButton').addEventListener('click', resetGame);