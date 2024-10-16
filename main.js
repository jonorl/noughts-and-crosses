document.addEventListener('DOMContentLoaded', function() {
    noughtsAndCrosses.start();
});

const noughtsAndCrosses = (function() {
    let gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    // let playerOne = new Player(X);
    // let playerTwo = new Player(O);
    let turnMarker = true

    // Player constructor
    // function Player(marker) {
    //     this.marker = marker;
    // }

    function switchTurn() {
        if(turnMarker === true){
            let turn = prompt("Player 1 select where to place marker");
            makeMove(turn,"X");
            turnMarker = false;
            checkWinCondition();
            }
        else {
            let turn = prompt("player 2 select where to place marker");
            makeMove(turn,"O");
            turnMarker = true;
            checkWinCondition();
        }
    }

    function makeMove(move, marker) {
        if (gameboard[move] !== "X" && gameboard[move] !== "O"){
            gameboard[move] = marker 
        }
        else switchTurn();
    }

    function checkWinCondition(){
        if (gameboard[0] === "X" && gameboard[1] === "X" && gameboard[2] === "X") {
            console.log("Player 1 won!");
        }
        else if (gameboard[3] === "X" && gameboard[4] === "X" && gameboard[5] === "X") {
            console.log("Player 1 won!");
        }
        else if (gameboard[6] === "X" && gameboard[7] === "X" && gameboard[8] === "X") {
            console.log("Player 1 won!");
        }
        else if (gameboard[0] === "X" && gameboard[3] === "X" && gameboard[6] === "X") {
            console.log("Player 1 won!");
        }
        else if (gameboard[1] === "X" && gameboard[4] === "X" && gameboard[7] === "X") {
            console.log("Player 1 won!");
        }
        else if (gameboard[2] === "X" && gameboard[5] === "X" && gameboard[8] === "X") {
            console.log("Player 1 won!");
        }
        else if (gameboard[0] === "X" && gameboard[4] === "X" && gameboard[8] === "X") {
            console.log("Player 1 won!");
        }
        else if (gameboard[2] === "X" && gameboard[4] === "X" && gameboard[6] === "X") {
            console.log("Player 1 won!");
        }
        else if (gameboard[0] === "O" && gameboard[1] === "O" && gameboard[2] === "O") {
            console.log("Player 2 won!");
        }
        else if (gameboard[3] === "O" && gameboard[4] === "O" && gameboard[5] === "O") {
            console.log("Player 2 won!");
        }
        else if (gameboard[6] === "O" && gameboard[7] === "O" && gameboard[8] === "O") {
            console.log("Player 2 won!");
        }
        else if (gameboard[0] === "O" && gameboard[3] === "O" && gameboard[6] === "O") {
            console.log("Player 2 won!");
        }
        else if (gameboard[1] === "O" && gameboard[4] === "O" && gameboard[7] === "O") {
            console.log("Player 2 won!");
        }
        else if (gameboard[2] === "O" && gameboard[5] === "O" && gameboard[8] === "O") {
            console.log("Player 2 won!");
        }
        else if (gameboard[0] === "O" && gameboard[4] === "O" && gameboard[8] === "O") {
            console.log("Player 2 won!");
        }
        else if (gameboard[2] === "O" && gameboard[4] === "O" && gameboard[6] === "O") {
            console.log("Player 2 won!");
        }
        else if (gameboard.every(value => value === "X" || value === "O")){
            console.log("It's a tie!");
        }
        else switchTurn();
    }

    return {
        start: switchTurn
    };

})();