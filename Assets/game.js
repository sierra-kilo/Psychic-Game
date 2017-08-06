
// list of letters
var letterList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// list of incorrectly guessed letters
var incorrectGuesses = [];

// other variables
var secretLetter = null;
var wins = 0;
var losses = 0;
var guessesRemaining = 0;
var myGuess = null;

var secretLetter = letterList[Math.floor(Math.random() * letterList.length)];

// hit key for guesses
function getGuess () {
    document.onkeyup = function (event) {
        myGuess = String.fromCharCode(event.keyCode).toLowerCase();
        // for testing
        console.log(myGuess);
        return myGuess
    }
}


// check myGuess
function answerChecker (myGuess) {
    if (myGuess === secretLetter) {
        wins = wins++
        // testing
        console.log(myGuess);
    }
    if (myGuess !== secretLetter && guessesRemaining > 0) {
        getGuess()
        // testing
        console.log(myGuess);
        guessesRemaining--
        console.log(guessesRemaining);
    }
    //     if (myGuess !== secretLetter && guessesRemaining =0) {
    // // need reset game function
    //         resetGame()
    //     }
}

function gamePlay() {
    secretLetter = letterList[Math.floor(Math.random() * letterList.length)];
    console.log(secretLetter)
    guessesRemaining = 10;
    console.log(guessesRemaining);
    document.getElementsByClassName('guessesLeft').innerHTML = guessesRemaining

    myGuess = getGuess()
    answerChecker(myGuess)

}

gamePlay()
