console.log("Up and running!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardTwo);
console.log("User flipped " + cardThree);

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[3] === cardsInPlay[2]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
}

var flipCard = function (cardId) {

if (cardsInPlay.length === 2) {
	console.log("true dat");
}

checkForMatch()

console.log("User flipped " + cards[cardId]);

cardsInPlay.push(cards[cardId]);
}

flipCard(0);
flipCard(2);
