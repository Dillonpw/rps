let userWins = 0;
let computerWins = 0;
const maxWins = 5;

function computerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

function updateScore() {
  document.getElementById('userScore').textContent = userWins;
  document.getElementById('computerScore').textContent = computerWins;

  if (userWins === maxWins) {
    alert("Congratulations! You won 5 rounds!");
    resetGame();
  } else if (computerWins === maxWins) {
    alert("Sorry, the computer won 5 rounds first! ");
    resetGame();
  }
}

function resetGame() {
  userWins = 0;
  computerWins = 0;
  updateScore();
}

function play(userChoice) {
  const computerChoiceValue = computerChoice();
  let result = '';

  if (userChoice === computerChoiceValue) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoiceValue === 'scissors') ||
    (userChoice === 'paper' && computerChoiceValue === 'rock') ||
    (userChoice === 'scissors' && computerChoiceValue === 'paper')
  ) {
    result = 'You win!';
    userWins++;
  } else {
    result = 'Computer wins!';
    computerWins++;
  }

  updateScore();

  alert(`You chose: ${userChoice}\nComputer chose: ${computerChoiceValue}\n\n${result}`);
}