let userWins = 0;
let computerWins = 0;
let ties = 0;
const maxWins = 5;

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
}

function updateScore(userChoice, computerChoiceValue, result) {
    document.getElementById('userScore').textContent = userWins;
    document.getElementById('computerScore').textContent = computerWins;
    document.getElementById('ties').textContent = ties;

    const battleText = `You chose: ${userChoice}! Computer chose: ${computerChoiceValue}! ${result}`;
    document.getElementById('battle').textContent = battleText;

    if (userWins === maxWins) {
        const customAlert = document.getElementById('customAlert');
        const customAlertMessage =
            document.getElementById('customAlertMessage');
        const customAlertButton = document.getElementById('customAlertButton');

        customAlertMessage.textContent = 'You Won! Click here to play again';
        customAlert.style.display = 'flex';

        customAlertButton.addEventListener('click', function () {
            customAlert.style.display = 'none';
        });
        resetGame();
    } else if (computerWins === maxWins) {
        const customAlert = document.getElementById('customAlert');
        const customAlertMessage =
            document.getElementById('customAlertMessage');
        const customAlertButton = document.getElementById('customAlertButton');

        customAlertMessage.textContent =
            'You Lose! Click here to play again';
        customAlert.style.display = 'flex';

        customAlertButton.addEventListener('click', function () {
            customAlert.style.display = 'none';
        });
        resetGame();
    }
}

function resetGame() {
    userWins = 0;
    computerWins = 0;
    ties = 0;
    updateScore('', '', '');

    // Hide battle text
    document.getElementById('battle').style.display = 'none';
}

function play(userChoice) {
    const computerChoiceValue = computerChoice();
    let result = '';

    if (userChoice === computerChoiceValue) {
        result = "It's a tie!";
        ties++;
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
    document.getElementById('battle').style.display = 'block'

    updateScore(userChoice, computerChoiceValue, result);
}
