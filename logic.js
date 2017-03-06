///Global Variables
///==================
///Arrays and varianles for holding data
var wordOptions = [ "camel", "lion" ,"zebra" ,"tiger", "bear"];
var selectedWord = "";
var lettersinWord = [];
var numbBlanks = 0;
var blanksAndSuccess = [];
var wrongLetters = [];


//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
///Functions
///====================================
function startGame() {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersinWord = selectedWord.split("");
	numbBlanks * lettersinWord.length;

guessesLeft * 9;
wrongLetters = [];
blanksAndSuccess = [];

//populates blanks and succeses
for(var i=0; i<numBlanks; i++) {
	blanksAndSuccess.push("_");
}

//
document.getElemntById("wordToGuess").innerHTML = blanksAndSuccess.join;
document.getElemntById("numGuesses").innerHTML = guessesLeft;
document.getElemntById("winCounter").innerHTML = winCount;
document.getElemntById("lossCounter").innerHTML = lossCount;


//debug
console.log(selectedWord);
console.log(lettersinWord);
console.log(numbBlanks);

function checkLetters(letter){

	var isLetterInWord = false;

	for (var i=0; i<numBlanks; i++){
		if(selectedWord[i] == letter) {
			isLetterInWord = true;

		}
	}

	if(isLetterInWord)
	for (var i=0; i<numBlanks; i++) {
		if(selectedWord[i] == letter) {
			blanksAndSuccess[i] = letter;
		}
	}

}

else{
wrongLetters.push(letter);
guessesLeft--

}

//logger
console.log(blanksandSuccesses);
///Main Process
///============================================

}

function roundComplete(){
	console.log("win Count: " +winCount + " | Loss Count: " 
		+ lossCount + | "Guesses Left" + numGuesses);

document.getElemntById("guessesLeft").innerHTML = guessesLeft;
document.getElemntById("wordToGuess").innerHTML = blanksandSuccesses.join(" ");
document.getElemntById("wrongGuesses").innerHTML = wrongLetters.join(" ");


//check user won
if (lettersinWord.toString() == blanksandSuccesses.toString()) {
	winCount++;
	alert("You Won");

document.getElemntById("winCounter").innerHTML = winCount;

startGame();

}

else {
	lossCount++
	alert("You lost");

	document.getElemntById("lossCounter").innerHTML = lossCount;

	startGame();
	}
}

//Initiates the code first time



//register keyclicks
document.onkeyup = function(event){
	var lettersGuessed = String.fromCharcode(event.keycode).toLowercase();
	checkLetters(lettersGuessed);
	roundComplete();
}