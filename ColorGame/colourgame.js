var colours = generateRandomColours(6);
    
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colourDisplay.textContent = pickedColour;

for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colours[i];
    
    squares[i].addEventListener("click", function () {
        // body...
        var clickedColour = this.style.backgroundColor;
        
        if (pickedColour === clickedColour){
            messageDisplay.textContent = "Correct!";
            changeAllColours(pickedColour);
            h1.style.backgroundColor = pickedColour;
        } else {
            this.style.backgroundColor = "#333333";
            messageDisplay.textContent = "Try Again";
        }
    });
}


function changeAllColours(colour) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour() {
    var randomNumber = Math.floor(Math.random() * 6 + 1);
    return colours[randomNumber];
}

function generateRandomColours(num) {
    var arr = [];
    
    for (var i = 0; i < num; i++) {
        arr.push(randomColour());
    }
    
    return arr;
}

function randomColour() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}