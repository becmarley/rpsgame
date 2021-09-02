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

//Computer's choice
function computerPlay(){
 let compChoice = options[Math.floor(Math.random() * options.length)];
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

    //looping the game
    function gameloop(){
        while (playerPoints < 2 && computerPoints < 2) {
            
}

    }
const playerSelection = prompt("Choose your weapon");

const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


