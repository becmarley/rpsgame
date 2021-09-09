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
const computerSelection = computerPlay();
let computerPoints = 0;
let playerPoints = 0;

//eventLIsteners to html
const results = document.querySelector('#result-container');
const btn = document.querySelectorAll('btn');
//Computer's choice
function computerPlay(){
 let compChoice = options[Math.floor(Math.random() * options.length)];
    return compChoice;
}

//Display result section

//Button reactions
const rockbtn = 
btn.addEventListener('click', function(e)){
    const para = document.createElement('p');
    const rockcontainer = document.querySelector('#rockcontainer').appendChild(para);
    para.textContent = "You clicked rock";
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
    
