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

// listening for user guess
document.onkeyup = function(event) {

    // recording user's guess
    var userGuess = event.key.toLowerCase();

    // create variables needed for displaying spaces
    var placeHolder = "_ ";
    var lettersLeft = placeHolder.repeat(computerChoice.length);

    //log to console what the user chose and the word the computer chose
    console.log("me: " + userGuess);
    console.log("word: " + computerGuess);

    //conditionals for determining if the user has guesses left or not
    if (remaining > 0) {
        for (var i = 0; i < computerChoice.length; i++) {
            commaGuesses.push(userGuess[i]); //appends user guess to empty list
            commaGuesses.splice(1); //removes everything but the first index in commaGuesses
        }
        commaGuesses = []; //reinitializes commaGuesses as an empty array
        guesses.push(commaGuesses); //appends contents of commaGuesses to empty list guesses
        remaining--; //decrements remaining guesses by 1
    }
    else {
        computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)]; // shows 

    }

    


    word.textContent = "Current word: " + lettersLeft;

    winsText.textContent = "Wins: " + wins;
    numLeft.textContent = "Guesses left: " + remaining;
    soFar.textContent = "Your guesses so far: " + guesses;
    stat.textContent = "THAT LETTER WAS " + status;


}