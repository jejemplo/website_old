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
}

function runQuiz() {
  document.getElementById("clickme").style.display = "none";
  document.getElementById("quizForm").style.display = "block";
  document.getElementById("question").innerHTML = question[0];
}
