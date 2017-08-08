// list of letters
var letterList = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// list of incorrect guesses
var incorrectGuesses = [];

// other variables
var secretLetter = null;
var wins = 0;
var losses = 0;
var guessesRemaining = 0;
// var myGuess = null;

// reset game state and assign a new secret
function reset() {
    guessesRemaining = 10;
    incorrectGuesses = [];
    secretLetter = letterList[Math.floor(Math.random() * letterList.length)];

    // for testing
    console.log('The secret letter is: ' + secretLetter);
}

// update display
function updateDisplay() {
    $('.winCount').text(wins);
    $('.lossCount').text(losses);
    $('.guessesLeft').text(guessesRemaining);
    $('.yourGuesses').text(incorrectGuesses.join(' '));
}

// game play
document.onkeyup = function (event) {
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    if (guess == secretLetter) {
        wins++;
        reset();
    } else {
        guessesRemaining--;
        incorrectGuesses.push(guess);
        if( guessesRemaining <= 0) {
            losses++;
            reset();
        }
    }
    updateDisplay();
}

// initial set 
reset();
updateDisplay();
