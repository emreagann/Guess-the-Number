const guessBtns = document.querySelectorAll('.num_btn');
const attemptsLeft = document.getElementById('attempts_left');
let randomNumber = getRandomNumber();
let guessedNumbers = [];
const attempts = 5;

guessBtns.forEach((btn) => {
    btn.addEventListener('click', checkNumber);
});

function checkNumber(e) {
    const clickedNumber = parseInt(e.target.innerText);
    if (clickedNumber === randomNumber) {
        gameWin(e);
    } else {
        if (!guessedNumbers.includes(clickedNumber)) {
            e.target.classList.add('wrong');
            guessedNumbers.push(clickedNumber);
            updateAttempts();
            checkGameOver();
        }
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function updateAttempts() {
    attemptsLeft.innerText = attempts - guessedNumbers.length;
}

function checkGameOver() {
    if (guessedNumbers.length >= attempts) {
        alert('You Lose');
        restartGame();
    }
}

function gameWin(e) {
    e.target.classList.add('correct');
    setTimeout(() => {
        alert('You Win');
        restartGame();
    }, 200);
}

function restartGame() {
    randomNumber = getRandomNumber();
    guessedNumbers = [];
    updateAttempts();
    guessBtns.forEach(btn => {
        btn.classList.remove('correct');
        btn.classList.remove('wrong');
    });
}
