/* 
const playerInput = getInputFromPlayer();
console.log(`You Selected ${playerInput}`);
const computerInput = getInputFromComputer();
console.log(`Computer Selected ${computerInput}`)
//This converts the string from anycase to lowercase
function getInputFromPlayer(){
    return prompt('Rock Paper or Scissors').toLowerCase();  
}
 


if( playerInput === 'rock' && computerInput === 'scissors'){
    alert(`You Win!! ${playerInput} beats ${computerInput}`);
};
if( playerInput === 'paper' && computerInput === 'rock'){
    alert(`You Win!! ${playerInput} beats ${computerInput}`);
};
if( playerInput === 'scissors' && computerInput === 'paper'){
    alert(`You Win!! ${playerInput} beats ${computerInput}`);
};
//Game Rules: Loss Conditions
if( playerInput === 'rock' && computerInput === 'paper'){
    alert(`You Lose ${playerInput} loses to ${computerInput}`);
};
if( playerInput === 'paper' && computerInput === 'scissors'){
    alert(`You Lose ${playerInput} loses to ${computerInput}`);
};
if( playerInput === 'scissors' && computerInput === 'rock'){
    alert(`You Lose ${playerInput} loses to ${computerInput}`);
};
//Game Rules: Tie Condition
if(playerInput === computerInput){
    alert(`Tie you both selected ${computerInput}`);
}; */

/* function playRound(playerSelection, computerSelection) {
            //Game Rules: Win Conditions
        if( playerSelection === 'rock' && computerSelection === 'scissors'){
            playerScore++
            return(`You Win!! ${playerSelection} beats ${computerSelection}`);
        };
        if( playerSelection === 'paper' && computerSelection === 'rock'){
            playerScore++
            return(`You Win!! ${playerSelection} beats ${computerSelection}`);
        };
        if( playerSelection === 'scissors' && computerSelection === 'paper'){
            playerScore++
            return(`You Win!! ${playerSelection} beats ${computerSelection}`);
        };
        //Game Rules: Loss Conditions
        if( playerSelection === 'rock' && computerSelection === 'paper'){
            computerScore++
            return(`You Lose ${playerSelection} loses to ${computerSelection}`);
        };
        if( playerSelection === 'paper' && computerSelection === 'scissors'){
            computerScore++
            return(`You Lose ${playerSelection} loses to ${computerSelection}`);
        };
        if( playerSelection === 'scissors' && computerSelection === 'rock'){
            computerScore++
            return(`You Lose ${playerSelection} loses to ${computerSelection}`);
        };
        //Game Rules: Tie Condition
        if(playerSelection === computerSelection){
            return(`Tie you both selected ${computerSelection}`);
        };
}

  function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
    const computerOptions = ['rock','paper','scissors'];
    return computerOptions[randomNumber];
  }
    let playerScore= 0;
    let computerScore = 0;

 function game(){
     for(var i = 0; i<=5; i++){
        const playerSelection = prompt('Rock Paper or Scissors').toLowerCase();  
        const computerSelection = computerPlay();
       let result = playRound(playerSelection,computerSelection);

        
        
     }
     if(playerScore > computerScore){
         console.log(`You Won the match final score is ${playerScore} for the player and ${computerScore} for the computer.`)
     }else if(computerScore > playerScore){
        console.log(`You Lost the match final score is ${playerScore} for the player and ${computerScore} for the computer.`)

     }else {
         console.log(`Its a tie you final score is Player ${playerScore}:Computer ${computerScore}`)
     }
 }
  */
let playerInput = "";
let computerInput="";
let playerScore = 0;
let computerScore =0;
let fiveRounds = false;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors")
const updatePlayerScore = document.getElementsByClassName("player-score")[0];
const updateComputerScore = document.getElementsByClassName("computer-score")[0];
const updateScoreHeader = document.getElementsByClassName("score-header")[0];
const updatePlayerSelection = document.getElementById("player-selection");
const updateComputerSelection = document.getElementById("computer-selection");
const overlay = document.getElementById("overlay");
const gameResult = document.getElementById("text");
const resetButton = document.querySelector("button");
const result = document.getElementById("result");
 
function addClass(){
    gameResult.classList.add("end");   
}
function removeOverlay(){
    overlay.style.display="none"
    gameResult.classList.remove("end");
}
function gameEnd(){
    if(playerScore === 5){
        fiveRounds = true;
        result.textContent="You Win!!";
    }
    if(computerScore === 5){
        fiveRounds = true;
        result.textContent="You Lost!!";
    }
    return
}
function addOverlay(){
    if(fiveRounds){

        overlay.style.display="block";
        setTimeout(addClass,10);
    }
}

function setPlayerSelection(playerInput){
    updatePlayerSelection.src = `IMG/${playerInput}.svg`;
    updatePlayerSelection.style.visibility = "unset";

}
function setComputerSelection(computerInput){
 updateComputerSelection.src= `IMG/${computerInput}.svg`;
 updateComputerSelection.style.visibility= "unset";   
}
function getInputFromComputer(){
    let randomNumber = Math.floor(Math.random()*3);
    const computerOptions = ['rock','paper','scissors'];
    return computerOptions[randomNumber];
};

function playRound(playerInput, computerInput) {
    //Game Rules: Win Conditions
    if( playerInput === 'rock' && computerInput === 'scissors'|| 
        playerInput === 'paper' && computerInput === 'rock'||
        playerInput === 'scissors' && computerInput === 'paper'){

            playerScore++
            updatePlayerScore.textContent=`Player: ${playerScore}`;
            updateScoreHeader.textContent=(`You Won!!`);
            setPlayerSelection(playerInput);
            setComputerSelection(computerInput);

        };
    //Game Rules: Loss Conditions
    if( playerInput === 'rock' && computerInput === 'paper'||
        playerInput === 'paper' && computerInput === 'scissors'||
        playerInput === 'scissors' && computerInput === 'rock'){

        computerScore++
        updateComputerScore.textContent=`Computer: ${computerScore}`;
        updateScoreHeader.textContent=(`You Lost!`);
        setPlayerSelection(playerInput);
        setComputerSelection(computerInput);

    };
    //Game Rules: Tie Condition
    if(playerInput === computerInput){
    updateScoreHeader.textContent=(`It's a Tie`);
    setPlayerSelection(playerInput);
    setComputerSelection(computerInput);
    };
};

 rock.addEventListener("click",function(){
     playerInput="rock";
     computerInput = getInputFromComputer();
     playRound(playerInput,computerInput);
     gameEnd();
     addOverlay();
 });
 paper.addEventListener("click",function(){
    playerInput="paper";
    computerInput = getInputFromComputer();
    playRound(playerInput,computerInput);
    gameEnd();
    addOverlay();
});
scissors.addEventListener("click",function(){
    playerInput="scissors";
    computerInput = getInputFromComputer();
    playRound(playerInput,computerInput);
    gameEnd();
    addOverlay();
})
resetButton.addEventListener("click",function(){
    playerInput = "";
    computerInput="";
    playerScore = 0;
    updatePlayerScore.textContent=`Player: ${playerScore}`;
    computerScore = 0;
    updateComputerScore.textContent=`Computer: ${computerScore}`;
    updateScoreHeader.textContent=`Score`;
    updatePlayerSelection.style.visibility = "hidden";
    updateComputerSelection.style.visibility= "hidden";
    removeOverlay();
    fiveRounds = false;
})