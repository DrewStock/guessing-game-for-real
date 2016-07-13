var userName = "";
var score = 0;
var response;

function get (comeback) {
  response = document.getElementById("response");
  response.innerHTML += comeback;
}

// Function called by user input (button click) to "Get Started"
function getStarted () {
  do {
      userName = prompt("Welcome to Drew's Guessing Game! What's your name?","");
  }
  while (userName == "");
  get ("It's great to meet you, " + userName + "! Please click Answer Questions to start the game.<br /><br />");
}

// Function to answer yes/no questions
function ask (question, correct, incorrect) {
  do {
      var q = prompt(question,"").toUpperCase();
  }
  while (q == "");
  if (q === 'YES' || q === 'Y') {
      get ("<span style='color:green'>Answer: " + correct + " " + "<img src='img/32px-SMirC-thumbsup.svg.png'/></span><br /><br />");
      score += 1;
  } else {
      get ("<span style='color:red'>Answer: " + incorrect + " " + "<img src='img/32px-SMirC-thumbsdown.svg.png'</span><br /><br />");
      score += 0;
  }
}

// Function to ask user to guess a number
function guessNumber (question, number, correct, high, low) {
  do {
      var numberInput = prompt(question,"");
  }
  while (numberInput == "");
  do {
    if (parseInt(numberInput) > number) {
        numberInput = prompt(high,"");
    } else if (parseInt(numberInput) < number) {
        numberInput = prompt(low,"");
    } else if ((isNaN(numberInput) == true) || (numberInput != number)) {
        numberInput = prompt("That doesn't look like a number to me. Please try again.","");
    }
  }
  while (numberInput != number);
  if (parseInt(numberInput) == number) {
      get ("<span style='color:green'>Answer: " + correct + " " + "<img src='img/32px-SMirC-thumbsup.svg.png'/></span><br /><br />");
      score += 1;
  }
}

// Function called by user input (button click) to "Answer Questions"
function answerQuestions () {

    // Function call of first question
    ask("Did I go to college in Pennsylvania? Please answer Yes or No.","I certainly did go to college in Pennsylvania. I'm a graduate of Penn State University, which is located in State College, PA.","Sorry, that's incorrect. I actually did go to college in Pennsylvania.");

    // Function call of second question
    ask("Am I a fan of the Portland Timbers? Please answer Yes or No.","You bet I'm a Timbers fan! Keep it up, Rose City! Don't let up, no pity!","Dang, that's so wrong. Of course I'm a Timbers fan! You didn't think that I was a Sounders fan, did you?");

    // Function call of third question
    ask("Do I like to go hiking? Please answer Yes or No.","I certainly do love to go hiking! When I've got my trail gear on, my wife calls me Ranger Drew.","You thought that I don't like to go hiking? Wow, you don't know me at all. That's incorrect.");

    // Function call of fourth question
    guessNumber("Guess what my lucky number is. I'll give you a hint, it's between 20 and 25:", 22, "Good guess, " + userName + "! My birthday is January 22<sup>nd</sup>, so 22 has always been my lucky number.", "Sorry, " + userName + ". That's too high. Please guess again.", "Sorry, " + userName + ". That's too low. Please guess again.");

    // Function call of fifth question
    guessNumber("Can you guess how many times I've visited the island of Maui? I'll give you a hint, it's between 1 and 5:", 2, "That is correct! I've been to Maui 2 times.", "Sorry, " + userName + ". That's too high. Please guess again.", "Sorry, " + userName + ". That's too low. Please guess again.");

    // Conclusion of game, final score is tallied
    var finalScore = document.getElementById("response");
    finalScore.innerHTML += "Thanks for playing, " + userName + ". You answered " + score + " out of 5 questions correctly.";
}
