/* 
const playerInput = getInputFromPlayer();
console.log(`You Selected ${playerInput}`);
const computerInput = getInputFromComputer();
console.log(`Computer Selected ${computerInput}`)
//This converts the string from anycase to lowercase
function getInputFromPlayer(){
    return prompt('Rock Paper or Scissors').toLowerCase();  
}
 
function getInputFromComputer(){
    let randomNumber = Math.floor(Math.random()*3);
    const computerOptions = ['rock','paper','scissors'];
    return computerOptions[randomNumber];
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

function playRound(playerSelection, computerSelection) {
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

        console.log(result);
        
     }
     if(playerScore > computerScore){
         console.log(`You Won the match final score is ${playerScore} for the player and ${computerScore} for the computer.`)
     }else if(computerScore > playerScore){
        console.log(`You Lost the match final score is ${playerScore} for the player and ${computerScore} for the computer.`)

     }else {
         console.log(`Its a tie you final score is Player ${playerScore}:Computer ${computerScore}`)
     }
 }
 game();
