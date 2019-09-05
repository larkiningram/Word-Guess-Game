

// Creates an array that lists out all of the alphabet.
var computerChoices = ["madonna", "elvis", "marylin monroe"];

// Creating variables to hold the number of wins, losses, and tries left. They start at 0.
var wins = 0;
var remaining = 12;
var guesses = [];

// Create variables that hold references to the places in the HTML where we want to display things.

var winsText = document.getElementById("wins-text");
var numLeft = document.getElementById("remain");
var soFar = document.getElementById("past");

// This function is run whenever the user presses a key.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.onkeyup = function(event) {


    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();

    // Randomly chooses a choice from the options array. This is the Computer's guess.


    var placeHolder = "_ ";
    var lettersLeft = placeHolder.repeat(computerGuess.length);
    
    console.log("me: " + userGuess);
    console.log("word: " + computerGuess);
    console.log(lettersLeft);

    // Reworked our code from last step to use "else if" instead of lots of if statements.

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number


    for (var i = 0; i < computerGuess.length; i++) {
        if (remaining > 0) {
            if (userGuess === computerGuess[i]){
                lettersLeft[i] = userGuess;
                remaining--;
            }
            else {
                remaining--;
            }
        }
    }

    // Display the user and computer guesses, and wins/losses/ties.
    
    winsText.textContent = "Wins: " + wins;
    numLeft.textContent = "Guesses left: " + remaining;
    soFar.textContent = "Your guesses so far: " + guesses;
    };

