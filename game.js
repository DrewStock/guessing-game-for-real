var userName = "";
var score = 0;

// Function called by user input (button click) to "Get Started"
function getStarted () {
do {
  userName = prompt("Welcome to Drew's Guessing Game! What's your name?","");
}
while (userName == "");
var response = document.getElementById("response");
response.innerHTML = "It's great to meet you, " + userName + "! Please click Answer Questions to start the game.<br><br>";
return userName;
}

// Function called by user input (button click) to "Answer Questions"
function answerQuestions () {

// Function to answer yes/no questions
function ask (question, correct, incorrect) {
do {
  var q = prompt(question,"").toUpperCase();
}
while (q == "");
if (q === 'YES' || q === 'Y') {
  var positive = document.getElementById("response");
  positive.innerHTML += "Answer: " + correct + "<br /><br />";
  score += 1;
} else {
    var negative = document.getElementById("response");
    negative.innerHTML += "Answer: " + incorrect + "<br /><br />";
    score += 0;
  }
return score;
}

// Function call of first question
ask("Did I go to college in Pennsylvania? Please answer Yes or No.","Good guess! I certainly did go to college in Pennsylvania. I'm a graduate of Penn State University, which is located in State College, PA.","Sorry, that's incorrect. I actually did go to college in Pennsylvania.");

// Function call of second question
ask("Am I a fan of the Portland Timbers? Please answer Yes or No.","You bet I'm a Timbers fan! Keep it up, Rose City! Don't let up, no pity!","Dang, that's dead wrong. Of course I'm a Timbers fan! You didn't think that I was a Sounders fan, did you?");

// Function call of third question
ask("Do I like to go hiking? Please answer Yes or No.","I certainly do love to go hiking. When I've got my trail gear on, my wife calls me Ranger Drew.","You thought that I don't like to go hiking? Geez, you don't know me at all. That's incorrect.");

// Function to ask user to guess a number
function guessNumber (question, number, correct, high, low) {
var numberInput = prompt(question,"");
do {
  if (parseInt(numberInput) > number) {
    numberInput = prompt(high,"");
} else if (parseInt(numberInput) < number) {
    numberInput = prompt(low,"");
} else if (isNaN(numberInput) == true) {
    numberInput = prompt("That doesn't look like a number to me. Please try again.","");
  }
}
while (numberInput != number);
if (parseInt(numberInput) == number) {
    var positive = document.getElementById("response");
    positive.innerHTML += "Answer: " + correct + "<br /><br />";
    score += 1;
  }
return score;
}

// Function call of fourth question
guessNumber("Guess what my lucky number is. I'll give you a hint, it's between 20 and 30:",22, "Good guess, " + userName + "! My birthday is January 22nd, so 22 has always been my lucky number.", "Sorry, " + userName + ". That's too high. Please guess again.", "Sorry, " + userName + ". That's too low. Please guess again.")

// Function call of fifth question
guessNumber("Can you guess how many times I've visited the island of Maui? I'll give you a hint, it's between 1 and 5:", 2, "That is correct! I've been to Maui 2 times.", "Sorry, " + userName + ". That's too high. Please guess again.", "Sorry, " + userName + ". That's too low. Please guess again.")

// Conclusion of game, final score is tallied
var finalScore = document.getElementById("response");
finalScore.innerHTML += "Thanks for playing, " + userName + ". You answered " + score + " out of 5 questions correctly.";
}
