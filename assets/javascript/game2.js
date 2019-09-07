// initialized variables
var wordBank = ["apple", "orange", "banana", "pear"];
var wins = 0;
var remaining = 12;
var commaGuesses = [];
var guesses = [];
var status = "???"

//finding elements that need to be updated on page
var winsText = document.getElementById("wins-text");
var numLeft = document.getElementById("remain");
var soFar = document.getElementById("past");
var word = document.getElementById("word");
var stat = document.getElementById("status");

// initialize computer choice
var computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)];

// create variables needed for displaying spaces
var placeHolder = "_ ";
var letters = placeHolder.repeat(computerChoice.length);

//split into a list of spaces so we can later iterate through
var lettersLeft = letters.split(" ");

// listening for user guess
document.onkeyup = function(event) {

    // recording user's guess
    var userGuess = event.key.toLowerCase();

    //log to console what the user chose and the word the computer chose
    console.log("me: " + userGuess);
    console.log("word: " + computerChoice);

    // function to restart the game
    function restart() {
        computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)]; // chooses a new word
        placeHolder = "_ ";
        letters = placeHolder.repeat(computerChoice.length);
        lettersLeft = letters.split(" ");
        // wins = 0;
        remaining = 12;
        commaGuesses = [];
        guesses = [];
        status = "???"
    }

    //conditionals for determining if the user has guesses left or not
    if (remaining > 0) {
        for (var i = 0; i < computerChoice.length; i++) {
            commaGuesses.push(userGuess[i]); //appends user guess to empty list
            commaGuesses.splice(1); //removes everything but the first index in commaGuesses
        }
        commaGuesses = []; //reinitializes commaGuesses as an empty array
        guesses.push(commaGuesses); //appends contents of commaGuesses to empty list guesses
    }
    else if (remaining === 0) {
        remaining = "YOU LOSE";
        restart();
    }

    //conditional that checks if the user has guessed the whole word
    if (letters.includes("_ ") === true) {
        // for loop that cycles through the letters of the computer's chosen word to see if the user's guess is correct
        for (var i = 0; i < computerChoice.length; i++) {
            if (userGuess == computerChoice[i]) { 
                lettersLeft[i] = userGuess; 
                letters = lettersLeft.join(" ");
                status = "RIGHT"
            }
            else if (userGuess == " ") {
                status = "???";
            }
            else {
                status = "WRONG"
            }
        }
        remaining--; // decrements the number of guesses remaining
    }
    else {
        wins++;
        remaining = "YOU WIN";
        restart();
    }


    word.textContent = "Current word: " + letters;
    winsText.textContent = "Wins: " + wins;
    numLeft.textContent = "Guesses left: " + remaining;
    soFar.textContent = "Your guesses so far: " + guesses;
    stat.textContent = "THAT LETTER WAS " + status;
}