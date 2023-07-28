const choices = ['rock', 'paper', 'scissors']
const playerScore = ""
const computerScore = ""
const winnerScore = 5

function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * choices.length);
    let computerPick = choices[randomChoice].toLowerCase();
    return computerPick;
}

function getPlayerChoice(){
    let playerPick = prompt("Choose rock, paper, or scissors: ");
    playerPick = playerPick.toLowerCase();
    return playerPick;
}
function checkWinner(){
    if (playerScore == winnerScore){
        return "You won 5 rounds! Game over"
    }else if (computerScore == winnerScore){
        return "Computer won 5 Rounds! Game over"
    }
    }

function rpsGame(){
    
    for (playerScore < winnerScore || computerScore < winnerScore;;){

        if(playerPlay == computerPlay){
        return "It's a tie!"

        }else if (playerPlay == 'rock' && computerPlay == 'paper'
            || playerPlay == 'paper' && computerPlay == 'scissors' 
            || playerPlay == 'scissors' && computerPlay == 'rock'){
            return "Computer wins!", computerScore += 1

        }else if (playerPlay == 'rock' && computerPlay == 'scissors' 
            || playerPlay == 'scissors' && computerPlay == 'paper'
            || playerPlay == 'paper' && computerPlay == 'rock'){
            return "You Win!", playerScore +=1
        }
        console.log('player score = ' + {playerScore})
        console.log('Computer score = ' + {computerScore})
    }
}

rpsGame()


