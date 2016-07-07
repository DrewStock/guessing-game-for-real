
var userName = "";

function getStarted () {
do {
  userName = prompt("Welcome to Drew's Guessing Game! What's your name?","");
  if (userName == "") {
  alert("Don't be a stranger! Please tell me your name.");
  }
}
while (userName == "");
var response = document.getElementById("response");
response.innerHTML = "It's great to meet you, " + userName + "! Let's get started.";
return userName;
}

var score = 0;
function playGame () {

// Function to ask yes/no questions
function ask (question, affirmative, negative) {
do {
  var q = prompt(question,"").toUpperCase();
  if (q == "") {
    alert("Come on. Play nice and answer the question.");
  }
}
while (q == "");
  if (q === 'YES' || q === 'Y') {
    alert(affirmative);
    score += 1;
  } else {
      alert(negative);
      score += 0;
  }
  return score;
}

ask("Did I go to college in Pennsylvania? Please answer Yes or No.","Good guess! I certainly did go to college in Pennsylvania. I'm a graduate of Penn State University, which is located in State College, PA.","Sorry, that's incorrect. I actually did go to college in Pennsylvania.");

ask("Am I a fan of the Portland Timbers? Please answer Yes or No.","You bet I am! Keep it up, Rose City! Don't let up, no pity!","Dang, that's dead wrong. You didn't think that I was a Sounders fan, did you?");
ask("Do I love beer? Please answer Yes or No.","That is correct.","Geez, you don't know me at all, do you? That's wrong.");

alert("Thanks for playing, " + userName + ". You answered " + score + " out of 4 questions correctly.");
}
