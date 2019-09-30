// initialized variables
var wordBank = ["apple", "orange", "banana", "pear", "guava", "mango", "tomato", "peach", "nectarine", "grape", "pineapple", "watermelon", "lime", "lemon", "raspberry", "strawberry", "blueberry"];
var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
var wins = 0;
var remaining = 13;
var guesses = [];
var status = "???"

//finding elements that need to be updated on page
var winsText = document.getElementById("wins-text");
var numLeft = document.getElementById("remain");
var soFar = document.getElementById("past");
var word = document.getElementById("word");
var stat = document.getElementById("status");

// initialize computer choice
var computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase();

// create variables needed for displaying spaces
var placeHolder = "_ ";
var letters = placeHolder.repeat(computerChoice.length);

//split into a list of spaces so we can later iterate through
var lettersLeft = letters.split(" ");

// function to restart the game
function restart() {
    computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)]; // chooses a new word
    placeHolder = "_ ";
    letters = placeHolder.repeat(computerChoice.length);
    lettersLeft = letters.split(" ");
    $(".letter-button").css("opacity", "1");
    remaining = 13;
    guesses = [];
    status = "???"
};

// listening for user guess
// document.onkeyup = function (event) {

//     // recording user's guess
//     var userGuess = event.key.toLowerCase();

//     //log to console what the user chose and the word the computer chose
//     console.log("me: " + userGuess);
//     console.log("word: " + computerChoice);

//     //conditionals for determining if the user has guesses left or not
//     if (remaining > 0) {
//         for (var i = 0; i < computerChoice.length; i++) {
//             commaGuesses.push(userGuess[i]); //appends user guess to empty list
//             commaGuesses.splice(1); //removes everything but the first index in commaGuesses
//         }
//         commaGuesses = []; //reinitializes commaGuesses as an empty array
//         guesses.push(commaGuesses); //appends contents of commaGuesses to empty list guesses
//     }
//     else if (remaining === 0) {
//         remaining = "YOU LOSE";
//         restart();
//     }

//     //conditional that checks if the user has guessed the whole word
//     if (letters.includes("_ ") === true) {
//         // for loop that cycles through the letters of the computer's chosen word to see if the user's guess is correct
//         for (var i = 0; i < computerChoice.length; i++) {
//             if (userGuess == computerChoice[i]) {
//                 lettersLeft[i] = userGuess;
//                 letters = lettersLeft.join(" ");
//                 status = "RIGHT"
//             }
//             else if (userGuess == " ") {
//                 status = "???";
//             }
//             else {
//                 status = "WRONG"
//             }
//         }
//         remaining--; // decrements the number of guesses remaining
//     }
//     else {
//         wins++;
//         remaining = "YOU WIN";
//         restart();
//     }



//     word.textContent = "Current word: " + letters;
//     winsText.textContent = "Wins: " + wins;
//     numLeft.textContent = "Guesses left: " + remaining;
//     soFar.textContent = "Your guesses so far: " + guesses;
//     stat.textContent = "THAT LETTER WAS " + status;
// };

$(document).ready(function () {
    $(".start").on("click", function() {
        word.textContent = "Current word: " + letters;
        console.log(computerChoice);
        $(".start").addClass("continue");
        $(".start").text("click me when done")
    })
    // word.textContent = "Current word: " + letters;
    // console.log(computerChoice);

    for (var i = 0; i < alpha.length; i++) {
        var letterBtn = $("<button>");

        letterBtn.addClass("letter-button letter letter-button-color");

        letterBtn.attr("data-letter", alpha[i]);

        letterBtn.text(alpha[i]);

        $("#buttons").append(letterBtn);
    }

    $(".letter-button").on("click", function () {

        var userGuess = $(this).attr("data-letter");
        if (remaining > 0) {
            guesses.push($(this).attr("data-letter"))
            $(this).css("opacity", "0.05");
            $("#past").text("Your guesses so far: " + guesses);
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

    })
})