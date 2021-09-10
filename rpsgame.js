//Response and points variables
const options = ["rock", "paper", "scissors"];
const rock = options[0];
const paper = options[1];
const scissors = options[2];
const rockWin = "Rock beats scissors.";
const paperWin = "Paper beats rock.";
const scissorsWin = "Scissors beats paper";
const tie = "It was a tie";
const playerWin = "You won! ";
const computerWin = "You lose! ";
const oops = "Please try again";
let computerPoints = 0;
let playerPoints = 0;

//eventListeners to html

const btn = document.querySelectorAll('btn');
const rockbtn = document.querySelector('#rockbtn');
const paperbtn = document.querySelector('#paperbtn');
const scissorsbtn = document.querySelector('#scissorsbtn');
const resultContainer = document.querySelector('#resultContainer')

//Computer's choice

function computerPlay(){
let compChoice = options[Math.floor(Math.random() * options.length)];
let compResult = document.getElementById('computerResult');
const compPara = document.createElement('p');
compResult.appendChild(compPara);
compPara.textContent = compChoice;
return compChoice;
}


//One round of the game
    function playRound(playerSelection, computerSelection){
        if (playerSelection === computerSelection){
            console.log(playerSelection,playerPoints);
            console.log(computerSelection, computerPoints);
            return tie;
        }

        else if(playerSelection === rock && computerSelection === paper){
            computerPoints = computerPoints + 1;
            console.log(playerSelection,playerPoints);
            console.log(computerSelection,computerPoints);
            return computerWin + paperWin;
        }

        else if(playerSelection === rock && computerSelection === scissors){
            playerPoints = playerPoints + 1;
            console.log(playerSelection,playerPoints);
            console.log(computerSelection,computerPoints);
            return playerWin + rockWin;
        }
        
        else if(playerSelection === paper && computerSelection === rock){
            playerPoints = playerPoints + 1;
            console.log(playerSelection,playerPoints);
            console.log(computerSelection,computerPoints);
            return playerWin + paperWin;
        }
        
        else if(playerSelection === paper && computerSelection === scissors){
            computerPoints = computerPoints + 1;
            console.log(playerSelection,playerPoints);
            console.log(computerSelection,computerPoints);
            return computerWin + scissorsWin;
        }

        else if(playerSelection === scissors && computerSelection === rock){
            computerPoints = computerPoints + 1;
            console.log(playerSelection,playerPoints);
            console.log(computerSelection,computerPoints);
            return computerWin + rockWin;
        }

        else if(playerSelection === scissors && computerSelection === paper){
            playerPoints = playerPoints + 1;
            console.log(playerSelection,playerPoints);
            console.log(computerSelection,computerPoints);
            return playerWin + scissorsWin;
        }

        else{
            console.log(playerSelection,playerPoints);
            console.log(computerSelection,computerPoints);
            return oops;
       }
};

//Button reactions 
rockbtn.addEventListener('click', rockPlay);
paperbtn.addEventListener('click',paperPlay);
scissorsbtn.addEventListener('click', scissorsPlay);

function rockPlay(){
    playRound(rock, computerPlay());
}


function paperPlay(){
    playRound(paper, computerPlay());
}
function scissorsPlay(){
    playRound(scissors, computerPlay());
}




    //looping the game
    /*function gameloop(){
        while (playerPoints < 5 && computerPoints < 5) {
        const computerSelection = computerPlay();
        const playerSelection = prompt("Choose your weapon");
        alert(playRound(playerSelection, computerSelection))
     };
    
         if(playerPoints === 5){
         console.log("Congratulations! You won the game!")
      }
         else{
          window.alert("If you want to play again, please refresh the page")
      }
    };

    gameloop();*/ 
    
