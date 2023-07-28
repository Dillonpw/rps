const choices = ['rock', 'paper', 'scissors']
const playerScore = ""
const computerScore = ""
const winnerScore = 5

function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * choices.length).toLowerCase;
    let computerPick = choices[randomChoice]
    console.log(computerPick)
}
function getPlayerchoice(){
    let playerPick = prompt("Choose rock, paper, or scissors: ")
    playerPick = playerPick.toLowerCase

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
        getComputerChoice()
        getPlayerchoice()
        checkWinner()
        if( playerPick == computerPick){
        return "It's a tie!"

        }else if (playerPick == 'rock' && computerPick == 'paper'
            || playerPick == 'paper' && computerPick == 'scissors' 
            || playerPick == 'scissors' && computerPick == 'rock'){
            return "Computer wins!", computerScore += 1

        }else if (playerPick == 'rock' && computerPick == 'scissors' 
            || playerPick == 'scissors' && computerPick == 'paper'
            || playerPick == 'paper' && computerPick == 'rock'){
            return "You Win!", playerScore +=1
        }
        console.log('player score = ' + {playerScore})
        console.log('Computer score = ' + {computerScore})
    }
}


