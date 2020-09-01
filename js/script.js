
// Welcoming screen//
const startGame = () => {
    const playBtn = document.querySelector('.btn');
    const welcomingScreen = document.querySelector('.welcoming');
    const scores = document.querySelector('.score');
    const mainScreen = document.querySelector('.main');

    playBtn.addEventListener('click', () => {
        welcomingScreen.classList.add('fade-out');
        scores.classList.add('fade-in');
        mainScreen.classList.add('fade-in');
    });
}

//Gra

const playMatch = () => {

    let pScore = 0;
    let cScore = 0;

    const buttonRock = document.querySelector('#rock');
    const buttonPaper = document.querySelector('#paper');
    const buttonScissors = document.querySelector('#scissors');



    buttonRock.addEventListener('click', function () {
        buttonClick('kamien');
    });
    buttonPaper.addEventListener('click', function () {
        buttonClick('papier');
    });
    buttonScissors.addEventListener('click', function () {
        buttonClick('nozyce');
    });

    const updateScores = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');


    function buttonClick(buttonName) {
        const computerOption = ['kamien', 'papier', 'nozyce'];
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOption[computerNumber];
        const playerChoice = buttonName;
        console.log(playerChoice);
        console.log(computerChoice);
        const winner = document.querySelector('#messages');
        if (playerChoice === computerChoice) {
            winner.textContent = 'Wybrałeś identyczną opcje! Remis!';
            playerHand.innerText = '';
            computerHand.innerText = '';
            console.log('remis!');
            return;
        }
        if (playerChoice === 'kamien') {
            if (computerChoice === 'nozyce') {
                winner.textContent = 'Kamien tępi nożyce! Wygrałeś!'
                playerHand.innerHTML = '<i class="far fa-hand-rock"></i>';
                computerHand.innerHTML = '<i class="far fa-hand-scissors"></i>';
                console.log('wygrales');
                pScore++;
                updateScores();
                return;
            }
            else {
                winner.textContent = 'Papier zawija kamien! Przegrałeś leszczu!';
                playerHand.innerHTML = '<i class="far fa-hand-rock"></i>';
                computerHand.innerHTML = '<i class="far fa-hand-paper"></i>';
                cScore++;
                updateScores();
                return;
            }
        }
        if (playerChoice === 'papier') {
            if (computerChoice === 'nozyce') {
                winner.textContent = 'Nożyce tną papier! Przegrałeś leszczu!'
                playerHand.innerHTML = '<i class="far fa-hand-paper"></i>';
                computerHand.innerHTML = '<i class="far fa-hand-scissors"></i>';
                cScore++;
                updateScores();
                return;
            }
            else {
                winner.textContent = 'Papier zawija kamien! Wygrałeś!'
                playerHand.innerHTML = '<i class="far fa-hand-paper"></i>';
                computerHand.innerHTML = '<i class="far fa-hand-rock"></i>';
                pScore++;
                updateScores();
                return;
            }
        }
        if (playerChoice === 'nozyce') {
            if (computerChoice === 'kamien') {
                winner.textContent = 'Kamien tępi nożyce! Przegrałeś leszczu!'
                playerHand.innerHTML = '<i class="far fa-hand-scissors"></i>';
                computerHand.innerHTML = '<i class="far fa-hand-rock"></i>';
                cScore++;
                updateScores();
                return;
            }
            else {
                winner.textContent = 'Nożyce tną papier! Wygrałeś!'
                playerHand.innerHTML = '<i class="far fa-hand-scissors"></i>';
                computerHand.innerHTML = '<i class="far fa-hand-paper"></i>';
                pScore++;
                updateScores();
                return;
            }
        }
    };
};

//kolejnosc wywolania funkcji
startGame();
playMatch();
