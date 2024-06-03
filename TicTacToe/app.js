const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

let playedCells = [];

let currentPlayer = "X";

let playedX =[];
let playedO = [];
//const gameRunning = true;

const cell = document.querySelectorAll(".cell");
const restartBtn = document.querySelector(".restart");
const message = document.querySelector(".message");


// ADD "X" OR "O" TO CLICKED CELL
// CHECK NUMBER OF THE CELL & STOCK IT INSIDE "INDEX" ARRAY
// REMOVE CLICKABILITY OF THE CLICKED CELL
// CHECK IF ONE PLAYER WON
// CHANGE CURRENT PLAYER ("X" OR "O")
const writeXO = (el) => {
    el.target.innerText = currentPlayer;
    const parent = el.target.parentNode;
    const index = [].indexOf.call(parent.children, el.target);
    el.target.removeEventListener("click", writeXO);
    if (currentPlayer === "X") {
        playedX.push(index);
        playedCells.push(index);
        endGame(winCombinations, playedX);
        currentPlayer = "O";
    } else if (currentPlayer === "O") {
        playedO.push(index);
        playedCells.push(index);
        endGame(winCombinations, playedO);
        currentPlayer = "X";
    };
} 
// START THE GAME AND ADD POSSIBILITY TO CLICK "X" OR "O" 
const startGame = () => {
    cell.forEach(el => {
        el.addEventListener("click", writeXO);
    });
  };

// RESET THE GAME
// FIRST PLAYER IS "X"
const resetGame = () => {
    currentPlayer = "X";
    cell.forEach(el => {
        el.innerText = "";
    });
    message.innerText = "";
    playedCells = [];
    playedX = [];
    playedO = [];
    startGame();
};

// ADDS VICTORY MESSAGE
// REMOVE ALL CLICK POSSIBILITY
const victory = () => {
    message.innerText = (`Player ${currentPlayer} wins`);
    cell.forEach(el => {
        el.removeEventListener("click", writeXO);
    })
};

const draw = () => {
    message.innerText = (`Nobody wins`);
}

// APPELLE LA FONCTION RESET
restartBtn.addEventListener("click", resetGame);

// CHECK IF SOMEBODY WINS
// BY COMPARING WINNING COMBINATIONS ARRAY
// WITH CURRENT PLAYER PLAYED CELLS ARRAY
// (DOES PLAYED CELLS ARRAY INCLUDES ONE OF THE WINNING COMBINATIONS ?)
const endGame = (winCombi, played) => {
        const check = [];
        winCombi.forEach(el => {
        check.push(el.every(v => played.includes(v)));
    });
    if (check.includes(true)) {
        victory();
    } else if (playedCells.length === 9) {
        draw();
    }
};

startGame();

