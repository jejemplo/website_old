const LOWER = 0;
const UPPER = 10;
const NUMQS = 10;

var correct = 0;
var guess;
var guesses = 0;

function makeQuestion() {
  var mult1 = Math.floor((Math.random() * (UPPER + 1)) + LOWER);
  var mult2 = Math.floor((Math.random() * (UPPER + 1)) + LOWER);
  return [`What is ${mult1} times ${mult2}? `, mult1 * mult2];
}

function startQuiz() {
  var q = makeQuestion();
  document.getElementById("question").innerHTML = q[0];
}
