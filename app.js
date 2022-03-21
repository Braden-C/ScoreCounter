const winningScoreSelect = document.querySelector('#maxScore')
const p1Scored = document.querySelector('#player1Scored')
const p2Scored = document.querySelector('#player2Scored')
const resetButton = document.querySelector('#reset')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const pName1 = document.querySelector('#playerName1')
const pName2 = document.querySelector('#playerName2')

let isGameOver = false;
let winningScore = 1;
let p1Score = 0;
let p2Score = 0;

pName1.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // pName1.style.visibility = 'hidden';
        pName1.disabled = true;
    }
})
pName2.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // pName2.style.visibility = 'hidden';
        pName2.disabled = true;
    }
})

winningScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(maxScore.value);
    reset();
})

// ==============================
// vvvv---Testing Alert functionality----vvvv
// ==============================

p1Scored.addEventListener('click', () => {
    // if (pName1.textContent || pName2.textContent === '') {
    //     // alert('Please Enter Player Names')
    //     // return
    // }
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner')
            pName1.classList.add('winnerName')
            pName2.classList.add('loserName')
            p2Display.classList.add('loser')
            p1Scored.disabled = true;
            p2Scored.disabled = true;
        }

    }
    p1Display.textContent = p1Score;
    nameDisableAll()
}
)

// ==============================
// vvvv-----Working Score Logic-----vvvv
// ==============================

p2Scored.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner')
            pName2.classList.add('winnerName')
            pName1.classList.add('loserName')
            p1Display.classList.add('loser')
            p1Scored.disabled = true;
            p2Scored.disabled = true;
        }
        p2Display.textContent = p2Score;
        nameDisableAll()
    }
})

resetButton.addEventListener('click', reset)

// ==============================
// vvvv-----Function List-----vvvv
// ==============================

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser')
    p2Display.classList.remove('winner', 'loser')
    pName1.classList.remove('winnerName', 'loserName')
    pName2.classList.remove('winnerName', 'loserName')
    p1Scored.disabled = false;
    p2Scored.disabled = false;
    pName1.disabled = false;
    pName2.disabled = false;
    nameShowAll();
}

function nameHideAll() {
    pName1.style.visibility = 'hidden';
    pName2.style.visibility = 'hidden';
}

function nameShowAll() {
    pName1.style.visibility = 'visible';
    pName2.style.visibility = 'visible';
    pName1.disabled = false;
    pName2.disabled = false;
}

function nameDisableAll() {
    pName1.disabled = true;
    pName2.disabled = true;
}


