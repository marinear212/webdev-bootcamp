var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("#winningScoreDisplay")
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

p1Button.addEventListener("click", function () {
    if(!gameOver) {
        p1Score++;
        if(winningScore === p1Score) {
            gameOver = true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent = p1Score;    
    }
    
});


p2Button.addEventListener("click", function () {
    if(!gameOver) {
        p2Score++;
        if(winningScore === p2Score) {
            gameOver = true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2Score;    
    }
});

resetButton.addEventListener("click", function() {
    reset();
})


numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
})

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}