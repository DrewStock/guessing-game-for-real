
var userName = "";

// Function called by user input (button click) to "Get Started"
function getStarted () {
do {
  userName = prompt("Welcome to Drew's Guessing Game! What's your name?","");
  if (userName == "") {
    alert("Don't be a stranger! Please tell me your name.");
  }
}
while (userName == "");
var response = document.getElementById("response");
response.innerHTML = "It's great to meet you, " + userName + "! Please click Answer Questions to start the game.<br><br>";
return userName;
}

var score = 0;

// Function called by user input (button click) to "Answer Questions"
function answerQuestions () {

// Function to ask yes/no questions
function ask (question, correct, incorrect) {
do {
  var q = prompt(question,"").toUpperCase();
  if (q == "") {
    alert("Come on. Play nice and answer the question.");
  }
}
while (q == "");
  if (q === 'YES' || q === 'Y') {
    var positive = document.getElementById("response");
    positive.innerHTML += "Answer: " + correct + "<br><br>";
    // alert("That's right.")
    score += 1;
  } else {
    var negative = document.getElementById("response");
    negative.innerHTML += "Answer: " + incorrect + "<br><br>";
      // alert("That's wrong.")
      score += 0;
  }
  return score;
  // return positive;
  // return negative;
}

// Function call of first question
ask("Did I go to college in Pennsylvania? Please answer Yes or No.","Good guess! I certainly did go to college in Pennsylvania. I'm a graduate of Penn State University, which is located in State College, PA.","Sorry, that's incorrect. I actually did go to college in Pennsylvania.");

// Function call of second question
ask("Am I a fan of the Portland Timbers? Please answer Yes or No.","You bet I'm a Timbers fan! Keep it up, Rose City! Don't let up, no pity!","Dang, that's dead wrong. You didn't think that I was a Sounders fan, did you?");

// Function call of third question
ask("Do I like to go hiking? Please answer Yes or No.","I certainly do love to go hiking. When I've got my trail gear on, my wife calls me Ranger Drew.","Geez, you don't know me at all, do you? That's incorrect.");

var finalScore = document.getElementById("response");
finalScore.innerHTML += "Thanks for playing, " + userName + ". You answered " + score + " out of 3 questions correctly.";
// alert("Thanks for playing, " + userName + ". You answered " + score + " out of 3 questions correctly.");
}
