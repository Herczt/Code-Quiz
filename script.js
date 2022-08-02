let timer = 70
let startButton = document.querySelector("#startButton")
let section = document.querySelector(".intro")
let timeLeft = document.querySelector("#timeLeft")
let gameDiv = document.querySelector("#gameQuestions")
let questions = [{
    question: "Which one of these data types returns either a true or false value?",
    A: "String", 
    B: "Array", 
    C: "Boolean", 
    D: "Object",
    Answer: "c"},
{
    question: "Inside what HTML element do you add a Javascript file?",
    A: "<h1>", 
    B: "<script>", 
    C: "<div>", 
    D: "Section",
    Answer: "b"},
{
    question: "What is the correct way to write an If statement?",
    A: "if(i === 5)", 
    B: "if i = 5 then", 
    C: "if i === 5", 
    D: "if i = 5",
    Answer: "a"},

{
    question: "How do you write a comment in javascript>",
    A: "<!-- This is a comment -->", 
    B: "/! This is a comment/!", 
    C: "`This is a comment`", 
    D: "// This is a comment",
    Answer: "d"},

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
let gameQs = document.querySelector(".question")
gameDiv.style.visibility = "hidden"

let startGame = function gameFunction() {
    section.style.display = "none"
    gameDiv.style.visibility = "visible"
    gameQuestions()

   timeFunc = setInterval(function() {
       timer--;
       timeLeft.textContent = "Time left: " + timer;

       if(timer === 0 || questionsIndex === questionIndexCurrent) {
           clearInterval(timeFunc);
           score();
       }
   }, 1000);
  }

  startButton.addEventListener("click", startGame)




let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
let button4 = document.querySelector("#button4")

  function gameQuestions() {
    let curretQuestion = questions[questionIndexCurrent]  
      gameQs.textContent = curretQuestion.question 

      button1.textContent = curretQuestion.A;
      button1.addEventListener("click", check)
      button2.textContent = curretQuestion.B;
      button2.addEventListener("click", check)
      button3.textContent = curretQuestion.C;
      button3.addEventListener("click", check)
      button4.textContent = curretQuestion.D;
      button4.addEventListener("click", check)

      if (button1.currentTarget === curretQuestion.Answer || button2.currentTarget === curretQuestion.Answer || button3.currentTarget === curretQuestion.Answer ||button4.currentTarget === curretQuestion.Answer)
      {
          timer = timer + 10
      }
      else{
          timer = timer - 10
      }
  }
  

function check() {
questionIndexCurrent++
gameQuestions()
}


function score() {
let li1= document.querySelector("#score1")
let li2= document.querySelector("#score2")
let li3= document.querySelector("#score3")


localStorage.setItem(newTime)
li1.textContent = timer

}


