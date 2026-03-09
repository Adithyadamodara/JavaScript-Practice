let board = ["","","","","","","","",""];
let currentPlayer = "X";
let gameActive = true;

const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

function handleClick(event){
    const index = event.target.dataset.index;

    if(board[index] != "" || !gameActive) return;

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === "O" ? "X" : "O";
}

function checkWinner(){
    for(let pattern of winPatterns){
        const [a,b,c] = pattern;
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
            status.textContent = board[a] + " Wins!";
            gameActive = false;
            return;
        }
    }
    if(!board.includes(""))
    {
        status.textContent = "Draw!";
        gameActive = false;
    }
}

function restartGame(){
    board = ["","","","","","","","",""];
    gameActive = true;
    currentPlayer = "X";
    status.textContent = "";

    cells.forEach(cell => cell.textContent = "");
}
