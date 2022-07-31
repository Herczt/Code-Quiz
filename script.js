let timer = 100
let wrongAnswerTime = 10
let startButton = document.querySelector("#startButton")
let section = document.querySelector(".intro")
let timeLeft = document.querySelector("#timeLeft")
let gameDiv = document.querySelector("#gameQuestions")
let questions = [{
    question: "Which one of these data types returns either a true or false value?",
    A: "String", 
    B: "Array", 
    C: "Boolean", 
    D: "Object"},
{
    question: "Inside what HTML element do you add a Javascript file?",
    A: "<h1>", 
    B: "<script>", 
    C: "<div>", 
    D: "Section"},
{
    question: "What is the correct way to write an If statement?",
    A: "if(i === 5)", 
    B: "if i = 5 then", 
    C: "if i === 5", 
    D: "if i = 5"},

{
    question: "How do you write a comment in javascript>",
    A: "<!-- This is a comment -->", 
    B: "/! This is a comment/!", 
    C: "`This is a comment`", 
    D: "// This is a comment"},

{
    question: "How do you write a comment in javascript>",
    A: "<!-- This is a comment -->", 
    B: "/! This is a comment/!", 
    C: "`This is a comment`", 
    D: "// This is a comment"},

{
    question: "Java is a short way of saying javascript?",
    A: "True", 
    B: "False"},
{
    question: "Which event occurs when the user clicks on an HTML element?",
    A: "onmouseclick", 
    B: "onmouseover", 
    C: "onclick", 
    D: "onchange"},

{
    question: "Which operator is used to assign a value to a variable?",
    A: "-", 
    B: "*", 
    C: "X", 
    D: "="},
]

let questionsIndex = questions.length
let questionIndexCurrent = 0


let startGame = function gameFunction() {
    section.style.display = "none"
    gameQuestions()

   timeFunc = setInterval(function() {
       timer--;
       timeLeft.textContent = "Time left: " + timer;

       if(timer === 0) {
           clearInterval(timeFunc);
           score();
       }
   }, 1000);
  }

  startButton.addEventListener("click", startGame)

  function gameQuestions() {
      gameDiv.innerHTML = "<p>" + questions.question + "</p>"

  }
  
