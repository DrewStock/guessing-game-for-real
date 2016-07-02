var userName = prompt("Welcome to Drew's Guessing Game! What's your name?","");
console.log("Start of the game. The user's name is: "+userName);
alert("It's great to meet you, "+userName+"! Let's get started.");
var state = prompt("Did I go to college in Pennsylvania? Please answer Yes or No.","").toUpperCase();
console.log("First question. The user's answer was: "+state);
if (state === 'YES') {
  alert("Good guess, "+userName+"! I certainly did go to college in Pennsylvania.\nI'm a graduate of Penn State University, which is located in State College, PA.");
} else {
  alert("Sorry, "+userName+". That's incorrect. I actually did go to college in Pennsylvania.");
}
var timbers = prompt("Am I a fan of the Portland Timbers? Please answer Yes or No.","").toUpperCase();
console.log("Second question. The user's answer was: "+timbers);
if (timbers === 'YES') {
  alert("That's right, "+userName+". You bet I am!\nKeep it up, Rose City! Don't let up, no pity!");
} else {
  alert("Dang, "+userName+". That's dead wrong.\nYou didn't think that I was a Sounders fan, did you?");
}
var beer = prompt("Do I like beer? Please answer Yes or No.","").toUpperCase();
console.log("Final question. The user's answer was: "+beer);
if (beer === 'YES') {
  alert("Trick question, "+userName+"! I don't just like beer, I LOVE beer!");
} else {
  alert("You know me too well, "+userName+".\nYou realized that I was trying to fool you, as my feelings about beer are so much stronger than simply just liking it.\nYou've earned my respect and admiration, cheers!");
}
