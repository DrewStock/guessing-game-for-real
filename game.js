do {
var userName = prompt("Welcome to Drew's Guessing Game! What's your name?","");
  if (userName == "") {
  alert("Don't be a stranger! Please tell me your name.");
  }
}
while (userName == "");
console.log("Start of the game. The user's name is: " + userName);
alert("It's great to meet you, " + userName + "! Let's get started.");
do {
var state = prompt("Did I go to college in Pennsylvania? Please answer Yes or No.","").toUpperCase();
  if (state == "") {
  alert("Come on, " + userName +". Play nice and answer the question.");
  }
}
while (state == "");
console.log("First question. The user's answer was: "+state);
var score = 0;
if (state === 'YES' || state === 'Y') {
  alert("Good guess, " + userName + "! I certainly did go to college in Pennsylvania.\nI'm a graduate of Penn State University, which is located in\nState College, PA.");
  score += 1;
} else {
  alert("Sorry, " + userName + ". That's incorrect. I actually did go to college in Pennsylvania.");
  score += 0;
}
console.log("User's score is: " + score);
do {
var timbers = prompt("Am I a fan of the Portland Timbers? Please answer Yes or No.","").toUpperCase();
  if (timbers == "") {
  alert("Come on, " + userName +". Play nice and answer the question.");
  }
}
while (timbers == "");
console.log("Second question. The user's answer was: " + timbers);
if (timbers === 'YES' || timbers === 'Y') {
  alert("That's right, " + userName + ". You bet I am!\nKeep it up, Rose City! Don't let up, no pity!");
  score += 1;
} else {
  alert("Dang, " + userName + ". That's dead wrong.\nYou didn't think that I was a Sounders fan, did you?");
  score += 0
}
console.log("User's score is: " + score);
do {
var beer = prompt("Do I like beer? Please answer Yes or No.","").toUpperCase();
  if (beer == "") {
    alert("Come on, " + userName +". Play nice and answer the question.");
  }
}
while (beer == "");
console.log("Third question. The user's answer was: " + beer);
if (beer === 'YES' || beer === 'Y') {
  alert("Trick question, " + userName + "! I don't just like beer, I LOVE beer! Sorry, you answered incorrectly.");
  score += 0;
} else if (beer === 'NO' || beer === 'N') {
  alert("You know me too well, " + userName + ".\nYou realized that I was trying to fool you, as my feelings\nabout beer are so much stronger than simply just liking it.\nYou've earned my respect and admiration, cheers!");
  score += 1;
} else {
  alert("Sorry, " + userName + ". That's incorrect.");
  score += 0;
}
console.log("User's score is: " + score);
do {
var lucky = prompt("Last question! Guess what my lucky number is. I'll give you a hint, it's between 20 and 30:","");
if (lucky == "") {
  alert("Come on, " + userName +". Play nice and answer the question.");
  }
}
while (lucky == "");
console.log("Fourth question. The user's answer was: " + lucky);
if (lucky == parseInt("22")) {
  alert("Good guess, " + userName + "! My birthday is January 22nd, so 22 has always been my lucky number.");
  score += 1;
} else if (lucky < parseInt("22")) {
  alert("Sorry, " + userName + ". That's too low.");
  score += 0;
} else {
  alert("Sorry, " + userName + ". That's too high.");
  score += 0;
}
alert("Thanks for playing, " + userName + ". You answered " + score + " out of 4 questions correctly.");
console.log("The user answered " + score + " out of 4 questions correctly. The game has concluded.");
