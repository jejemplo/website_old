const LOWER = 0;
const UPPER = 10;
const NUMQS = 10;

var correct = 0;
var guess;
var guesses = 0;
var question = makeQuestion();

function makeQuestion() {
  var mult1 = Math.floor((Math.random() * (UPPER + 1)) + LOWER);
  var mult2 = Math.floor((Math.random() * (UPPER + 1)) + LOWER);
  return [`What is ${mult1} times ${mult2}? `, mult1 * mult2];
}

function getAnswer() {
  var message;
  var ans = parseInt(document.getElementById('answer').value);
  guesses++;
  document.getElementById("answer").style.display = "none";
  document.getElementById("makeGuess").style.display = "none";
  if (ans === question[1]) {
    message = "That's right - well done.";
    correct++;
  } else {
    message = `No. I'm afraid the answer is ${question[1]}.`;
  }
  document.getElementById("question").innerHTML = message;
  if (guesses < 10) {
    question = makeQuestion();
    setTimeout(askQuestion, 3000);
  } else {
    message += "<br><br>I asked you 10 questions.<br>"
    message += ` You got ${correct} of them right.`
    document.getElementById("question").innerHTML = message;
  }
}

function askQuestion() {
    document.getElementById("quizForm").reset();
    document.getElementById("answer").style.display = "inline";
    document.getElementById("makeGuess").style.display = "inline";
    document.getElementById("clickme").style.display = "none";
    document.getElementById("quizForm").style.display = "block";
    document.getElementById("question").innerHTML = question[0];
}
