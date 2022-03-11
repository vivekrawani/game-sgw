
const choiceArr = document.querySelectorAll("img");

const dUser = document.querySelector("#user-choice");
const dComp = document.querySelector("#computer-choice");

let userChoice;
let computerChoice;
for(let i = 0; i < choiceArr.length; i++){
    choiceArr[i].addEventListener("click", (e)=>{
    userChoice = e.target.alt;
    computerChoice = getComputerChoice();
    dUser.innerHTML = "You choose " + userChoice;
    dComp.innerHTML = "Computer choose " + computerChoice;
    displayResult(userChoice, computerChoice);
    });
}
function getComputerChoice(){
    let i = Math.floor(Math.random()*3);
    let arr = ["snake", "gun", "water"];
    return arr[i];
}

var userScore = 0;
var computerScore = 0;
function displayResult(userChoice, computerChoice){
    if(computerChoice == userChoice){
        document.querySelector("#result").textContent = "DRAW!";
    }
    else if ((userChoice == "snake" && computerChoice == "water")||(userChoice == "water" && computerChoice == "gun")||(userChoice == "gun" && computerChoice == "snake")) {
        document.querySelector("#result").textContent =  user +" won!";
        userScore++;
        document.querySelector("#user-score").textContent = userScore;

    }
    else {
        document.querySelector("#result").textContent = user + " lost!";
        computerScore++;
        document.querySelector("#computer-score").textContent = computerScore;
    }
}
var user = prompt("Enter player name")
document.getElementById("user-name").innerText = user;


//
//
//
