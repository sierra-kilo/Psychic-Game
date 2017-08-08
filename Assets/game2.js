// list of letters
var letterList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// empty list of incorrectly guessed letters
var incorrectGuesses = [];

// other variables
var secretLetter = null;
var wins = 0;
var losses = 0;
var guessesRemaining = 0;
var myGuess = null;


// get keystroke and log as myGuess
function getGuess () {
    document.onkeyup = function (event) {
        myGuess = String.fromCharCode(event.keyCode).toLowerCase();
        // for testing
        console.log(myGuess);
    }
}

// set new value to secretLetter
function newSecretLetter () {
    secretLetter = letterList[Math.floor(Math.random() * letterList.length)];
    // for testing
    console.log('the new secret letter isL ', secretLetter);

    return secretLetter;
}

function updateWins() {
    wins++;
    // for testing
    console.log('wins: ', wins);
}

function updateLosses() {
    losses++;
    // for testing
    console.log('losses: ', losses)
}

function updateIncorrectGuesses() {
    incorrectGuesses.push(myGuess);
    // for testing
    console.log(incorrectGuesses);
}

function updateGuessesRemaining() {
    guessesRemaining--;
    console.log('guessesRemaining: ', guessesRemaining);
}

function resetVariables() {
    guessesRemaining = 9;
    myGuess = null;
    incorrectGuesses = [];
    secretLetter = newSecretLetter()
}

function checkAnswer() {
    if (myGuess == secretLetter) {
        updateWins();
        resetVariables();
    }else if (myGuess != secretLetter && guessesRemaining > 0) {
        updateIncorrectGuesses();
        updateGuessesRemaining();
    }else {
        updateLosses();
        resetVariables();
    }
}

function gamePlay() {
    newSecretLetter();
    getGuess();
    checkAnswer();
}

gamePlay()
