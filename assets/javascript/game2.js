


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

    var userGuess = event.key.toLowerCase();
}