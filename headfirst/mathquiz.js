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
  var ans = parseInt(document.getElementById('answer').value);
  if (ans === question[1]) {
    console.log("You got it!");
    document.getElementById("question").innerHTML = "You got it!";
  } else {
    console.log("Not!");
    document.getElementById("question").innerHTML = "Not!";
  }
}

function startQuiz() {
  document.getElementById("clickme").style.display = "none";
  document.getElementById("quizForm").style.display = "block";
  document.getElementById("question").innerHTML = question[0];
}
