const choices = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * choices.length).toLowerCase;
    let computerPick = choices[randomChoice]
    console.log(computerPick)
}


function rpsRound(){
    let playerPick = prompt("Choose your weapon: ").toLowerCase
    getComputerChoice()
    if (playerPick == computerPick){
    return "It's a tie!"
}   else if (playerPick == 'rock' && computerPick == 'paper'
|| playerPick == 'paper' && computerPick == 'scissors' 
|| playerPick == 'scissors' && computerPick == 'rock'){
    return "Computer wins!"
}else if (playerPick == 'rock' && computerPick == 'scissors' 
|| playerPick == 'scissors' && computerPick == 'paper'
|| playerPick == 'paper' && computerPick == 'rock'){
    return "You Win!"
}
}
rpsRound()