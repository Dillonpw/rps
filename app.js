const choices = ['rock', 'paper', 'scissors']
const playerScore = ""
const computerScore = ""


function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * choices.length).toLowerCase;
    let computerPick = choices[randomChoice]
    console.log(computerPick)
}


function rpsRound(){
    let playerPick = prompt("Choose your weapon: ")
     playerPick = playerPick.toLowerCase
    getComputerChoice()
    if (playerPick == computerPick){
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