const choices = ['rock', 'paper', 'scissors']

function computerChoice(){
    const randomChoice = Math.floor(Math.random() * choices.length);
    let computerPick = choices[randomChoice]
}
console.log(computerPick)
