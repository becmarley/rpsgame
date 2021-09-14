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
//Id selections 
const btn = document.querySelectorAll('btn');
const rockbtn = document.querySelector('#rockbtn');
const paperbtn = document.querySelector('#paperbtn');
const scissorsbtn = document.querySelector('#scissorsbtn');
const compRock = document.querySelector('#compRock');
const compPaper = document.querySelector('#compPaper');
const compScissors = document.querySelector('#compScissors')
const resultContainer = document.querySelector('#resultContainer');
const resultPara = document.querySelector('#resultPara');
const compbtn = document.querySelector('compbtn'); 

//Computer's choice randomizer
function computerPlay(){
    let compChoice = options[Math.floor(Math.random() * options.length)];
    return compChoice;
}

//One round of the game, responses and logging
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        let results = tie;
        resultPara.textContent = results;
        cppChangeBack();
        cprChangeBack();
        cpsChangeBack();
        if(computerSelection === rock){
            cprChange();
        }
        else if(computerSelection === paper){
            cppChange();
        }
        else{
            cpsChange();
        }
        console.log(playerSelection,playerPoints);
        console.log(computerSelection, computerPoints);
        return tie;
    }

    else if(playerSelection === rock && computerSelection === paper){
        computerPoints = computerPoints + 1;
        let results = computerWin + paperWin;
        resultPara.textContent = results;
        cppChangeBack();
        cprChangeBack();
        cpsChangeBack();
        cppChange();
        console.log(playerSelection,playerPoints);
        console.log(computerSelection,computerPoints);
        return computerWin + paperWin;
    }

    else if(playerSelection === rock && computerSelection === scissors){
        playerPoints = playerPoints + 1;
        let results = playerWin + rockWin;
        resultPara.textContent = results;
        cprChangeBack();
        cppChangeBack();
        cpsChangeBack();
        cpsChange();
        console.log(playerSelection,playerPoints);
        console.log(computerSelection,computerPoints);
        return playerWin + rockWin;
    }
    
    else if(playerSelection === paper && computerSelection === rock){
        playerPoints = playerPoints + 1;
        let results = playerWin + paperWin;
        resultPara.textContent = results;
        cprChangeBack();
        cppChangeBack();
        cpsChangeBack();
        cprChange();
        console.log(playerSelection,playerPoints);
        console.log(computerSelection,computerPoints);
        return playerWin + paperWin;
    }
    
    else if(playerSelection === paper && computerSelection === scissors){
        computerPoints = computerPoints + 1;
        let results = computerWin + scissorsWin;
        resultPara.textContent = results;
        cprChangeBack();
        cppChangeBack();
        cpsChangeBack();
        cpsChange();
        console.log(playerSelection,playerPoints);
        console.log(computerSelection,computerPoints);
        return computerWin + scissorsWin;
    }

    else if(playerSelection === scissors && computerSelection === rock){
        computerPoints = computerPoints + 1;
        let results = computerWin + rockWin;
        resultPara.textContent = results;
        cppChangeBack();
        cpsChangeBack();
        cprChangeBack();
        cprChange();
        console.log(playerSelection,playerPoints);
        console.log(computerSelection,computerPoints);
        return computerWin + rockWin;
    }

    else if(playerSelection === scissors && computerSelection === paper){
        playerPoints = playerPoints + 1;
        let results = playerWin + scissorsWin;
        resultPara.textContent = results;
        cprChangeBack();
        cppChangeBack();
        cpsChangeBack();
        cppChange();
        console.log(playerSelection,playerPoints);
        console.log(computerSelection,computerPoints);
        return playerWin + scissorsWin;
    }

    else{
        resultPara.textContent = results;
        console.log(playerSelection,playerPoints);
        console.log(computerSelection,computerPoints);
        return oops;
    }
};

//Button reactions 
rockbtn.addEventListener('click', rockPlay);
paperbtn.addEventListener('click', paperPlay);
scissorsbtn.addEventListener('click', scissorsPlay);


///Calling click button response
function rockPlay(){
    playRound(rock, computerPlay());
}

function paperPlay(){
    playRound(paper, computerPlay());
}
function scissorsPlay(){
    playRound(scissors, computerPlay());
}

//Computer Button animation
function cprChange(){
    compRock.style.backgroundColor = 'gold';
    compRock.style.color = '#414141';
}
function cprChangeBack(){
    compRock.style.backgroundColor = '#414141';
    compRock.style.color = 'white';
}

function cppChange(){
    compPaper.style.backgroundColor = 'gold';
    compPaper.style.color = '#414141';
}
function cppChangeBack(){
    compPaper.style.backgroundColor = '#414141';
    compPaper.style.color = 'white'
}

function cpsChange(){
    compScissors.style.backgroundColor = 'gold';
    compScissors.style.color = '#414141';
}
function cpsChangeBack(){
    compScissors.style.backgroundColor = '#414141';
    compScissors.style.color = 'white'
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
    
