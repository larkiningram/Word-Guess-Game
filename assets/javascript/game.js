

// Creates an array that lists out all of the alphabet.
var computerChoices = [["madonna", "elvis", "marylin", "rooosevelt"], ["apple", "orange", "pear", "banana"], ["dog", "monkey", "kitten", "dolphin"]];

// Creating variables to hold the number of wins, losses, and tries left. They start at 0.
var wins = 0;
var remaining = 13;
var commaGuesses = [];
var guesses = [];
var status = "???"
// Create variables that hold references to the places in the HTML where we want to display things.

var winsText = document.getElementById("wins-text");
var numLeft = document.getElementById("remain");
var soFar = document.getElementById("past");
var word = document.getElementById("word");
var stat = document.getElementById("status");


// document.onkeyup = function (event) {

//     var x = event.key.toLowerCase();
//     if (x === "p") {
//         x = 0;
//     }
//     else if (x === "f") {
//         x = 1;
//     }
//     else if (x === "a") {
//         x = 2;
//     }
// This function is run whenever the user presses a key.
var computerGuess = computerChoices[1][Math.floor(Math.random() * computerChoices.length)];




// var x = prompt('press "p" to select people, "f" to select fruit, or "a" to select people');
// if (x === "p") {
//     x = 0;
// }
// else if (x === "f") {
//     x = 1;
// }
// else if (x === "a") {
//     x = 2;
// }
// // This function is run whenever the user presses a key.
// var computerGuess = computerChoices[x][Math.floor(Math.random() * computerChoices.length)];

var placeHolder = "_ ";
var letters = placeHolder.repeat(computerGuess.length);
var lettersLeft = letters.split(" ");

document.onkeyup = function (event) {


    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();

    // Randomly chooses a choice from the options array. This is the Computer's guess.

    console.log("me: " + userGuess);
    console.log("word: " + computerGuess);

    // console.log(lettersLeft);

    if (remaining > 0) {
        for (var i = 0; i < computerGuess.length; i++) {

            commaGuesses.push(userGuess[i]);
            commaGuesses.splice(1);
        }
        commaGuesses = [];
        guesses.push(commaGuesses);
    }
    else if (remaining === 0) {
        remaining = "YOU LOSE";
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        wins = 0;
        remaining = 12;
        commaGuesses = [];
        guesses = [];
        status = "???"
        // break

    }
    if (letters.includes("_ ") === true) {
        for (var i = 0; i < computerGuess.length; i++) {
            // debugger;
            if (userGuess == computerGuess[i]) {
                lettersLeft[i] = userGuess;
                letters = lettersLeft.join(" ");
                status = "RIGHT"
            }
            else if (userGuess == " ") {
                status = "???";
                i = computerGuess.length;
            }
            else {

                status = "WRONG"
            }
        }
        remaining--;
    }
    else {
        wins++;
        // remaining = "YOU WIN";
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        remaining = 12;
        commaGuesses = [];
        guesses = [];
        status = "???"
    }

    function repeats(guesses) {
        let unique = {};
        guesses.forEach(function(i) {
            if(!unique[i]) {
                unique[i] === true;
            }
        });
        console.log(Object);
        console.log(Object.keys);
        console.log(Object.keys(unique));
        return Object.keys(unique);
    }
    repeats(guesses);

        // Display the user and computer guesses, and wins/losses/ties.

        word.textContent = "Current word: " + letters;

        winsText.textContent = "Wins: " + wins;
        numLeft.textContent = "Guesses left: " + remaining;
        soFar.textContent = "Your guesses so far: " + guesses;
        stat.textContent = "THAT LETTER WAS " + status;

    };
};

