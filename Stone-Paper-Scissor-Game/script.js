let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

 
let genCompChoice = ()=>{
    let option = ["rock","papper","scissor"];
    let renIdx = Math.floor(Math.random() * 3);
    return option[renIdx];
}

let drawGame = ()=>{
  console.log("Game was draw");
  msg.innerText = "Game was Draw";
  msg.style.backgroundColor = "gray";
}

let showWinner = (userWin,userChoice,compChoice) =>{
   if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you win you ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
   } else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `you lose you ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
   }
}

let playGame = (userChoice)=>{
  console.log("userChoice is", userChoice);
  const compChoice = genCompChoice();
  console.log("compChoice is", compChoice);

  if(userChoice === compChoice){
    drawGame();
  } 
  else{
  let userWin = true;
  if(userChoice ==="rock"){
    userWin = compChoice ==="papper"? false : true;
  } else if(userChoice ==="papper"){
    userWin = compChoice === "scissor"? false : true;
  } else{
    userWin = compChoice ==="rock"?false : true;
  }
  showWinner(userWin, userChoice,compChoice);
}
};


choices.forEach((choice)=>{
  console.log(choice);
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("Id");
     playGame(userChoice);
  })
});





