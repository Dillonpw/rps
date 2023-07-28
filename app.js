const choices = ['rock', 'paper', 'scissors']
const playerScore = ""
const computerScore = ""
const winnerScore = 5

function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * choices.length);
    let computerPick = choices[randomChoice].toLowerCase();
    return choices[computerPick];
}

function play(getUserChoice){
    const computerPlay = getComputerChoice();
    let result = '';

    if (getUserChoice === computerPlay){
        result = "It's a Tie!"
    } else if (getUserChoice === 'rock' && computerPlay ==='paper'
    || getUserChoice === 'paper' && computerPlay === 'scissors' 
    || getUserChoice === 'scissors' && computerPlay === 'rock'){
    return "Computer wins!", computerScore += 1

}else if (getUserChoice === 'rock' && computerPlay === 'scissors' 
    || getUserChoice === 'scissors' && computerPlay === 'paper'
    || getUserChoice === 'paper' && computerPlay === 'rock'){
    return "You Win!", playerScore +=1
}
}

