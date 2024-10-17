document.addEventListener("DOMContentLoaded", function() {
    noughtsAndCrosses.start();
});

const noughtsAndCrosses = (function() {

    // Player constructor
    function Player(name, marker) {
        this.name = name;
        this.marker = marker;
    }

    let playerOneName = document.querySelector(".name1");
    let playerTwoName = document.querySelector(".name2");
    let turnMessage = document.querySelector(".turnIndicator");
    let blocks = document.querySelectorAll(".block");
    let btn = document.querySelector(".reset")

    let gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let turnMarker = true;
    let clickedBlock;


    function renderTurnMessage(){
        let playerOne = new Player(playerOneName.value, "X");
        let playerTwo = new Player(playerTwoName.value, "O");
        if (playerOneName.value === "" || playerTwoName.value === ""){
            turnMessage.style.color = "red";
        }
        else if (turnMarker === true){
            turnMessage.style.color = "black";
            turnMessage.innerHTML = playerOne.name + " (X), please play now"
        }
        else if (turnMarker === false){
            turnMessage.style.color = "black";
            turnMessage.innerHTML = playerTwo.name + " (O), please play now"
        }
    }

    function switchTurn() {
        
            if(turnMarker === true){
                makeMove(clickedBlock,"X");
                checkWinCondition();
                }

            else {
                makeMove(clickedBlock,"O");
                checkWinCondition();
            }
    }

    function makeMove(move, marker) {
        if (gameboard[move] !== "X" && gameboard[move] !== "O"){
            gameboard[move] = marker 
            if (turnMarker === true) {
                turnMarker = false;
            } 
            else if (turnMarker === false){
                turnMarker = true;
            }
        }
        else {
        console.log("error");
        turnMessage.innerHTML = "Box already selected";
        return;
        } 
    }

    function checkWinCondition(){
        console.log(gameboard);
        if (gameboard[0] === "X" && gameboard[1] === "X" && gameboard[2] === "X") {
            turnMessage.innerHTML = playerOneName.value + " won!";
            return;
        }
        else if (gameboard[3] === "X" && gameboard[4] === "X" && gameboard[5] === "X") {
            turnMessage.innerHTML = playerOneName.value + " won!";
            return;
        }
        else if (gameboard[6] === "X" && gameboard[7] === "X" && gameboard[8] === "X") {
            turnMessage.innerHTML = playerOneName.value + " won!";
            return;
        }
        else if (gameboard[0] === "X" && gameboard[3] === "X" && gameboard[6] === "X") {
            turnMessage.innerHTML = playerOneName.value + " won!";
            return;
        }
        else if (gameboard[1] === "X" && gameboard[4] === "X" && gameboard[7] === "X") {
            turnMessage.innerHTML = playerOneName.value + " won!";
            return;
        }
        else if (gameboard[2] === "X" && gameboard[5] === "X" && gameboard[8] === "X") {
            turnMessage.innerHTML = playerOneName.value + " won!";
            return;
        }
        else if (gameboard[0] === "X" && gameboard[4] === "X" && gameboard[8] === "X") {
            turnMessage.innerHTML = playerOneName.value + " won!";
            return;
        }
        else if (gameboard[2] === "X" && gameboard[4] === "X" && gameboard[6] === "X") {
            turnMessage.innerHTML = playerOneName.value + " won!";
            return;
        }
        else if (gameboard[0] === "O" && gameboard[1] === "O" && gameboard[2] === "O") {
            turnMessage.innerHTML = playerTwoName.value + " won!";
            return;
        }
        else if (gameboard[3] === "O" && gameboard[4] === "O" && gameboard[5] === "O") {
            turnMessage.innerHTML = playerTwoName.value + " won!";
            return;
        }
        else if (gameboard[6] === "O" && gameboard[7] === "O" && gameboard[8] === "O") {
            turnMessage.innerHTML = playerTwoName.value + " won!";
            return;
        }
        else if (gameboard[0] === "O" && gameboard[3] === "O" && gameboard[6] === "O") {
            turnMessage.innerHTML = playerTwoName.value + " won!";
            return;
        }
        else if (gameboard[1] === "O" && gameboard[4] === "O" && gameboard[7] === "O") {
            turnMessage.innerHTML = playerTwoName.value + " won!";
            return;
        }
        else if (gameboard[2] === "O" && gameboard[5] === "O" && gameboard[8] === "O") {
            turnMessage.innerHTML = playerTwoName.value + " won!";
            return;
        }
        else if (gameboard[0] === "O" && gameboard[4] === "O" && gameboard[8] === "O") {
            turnMessage.innerHTML = playerTwoName.value + " won!";
            return;
        }
        else if (gameboard[2] === "O" && gameboard[4] === "O" && gameboard[6] === "O") {
            turnMessage.innerHTML = playerTwoName.value + " won!";
            return;
        }
        else if (gameboard.every(value => value === "X" || value === "O")){
            turnMessage.innerHTML = "It's a tie!";
        }
        else renderTurnMessage();
    }

    blocks.forEach(block => {
        block.addEventListener("click", function(e) {
            clickedBlock = e.target.getAttribute('id');
            switchTurn();
            if(playerOneName === "" && playerTwoName === ""){
                renderTurnMessage();
            }
            else if (turnMarker === true) {
                block.innerHTML = "O";
            } 
            else if (turnMarker === false){
                block.innerHTML = "X";
            }
        });
    });

    btn.addEventListener("click", function() {
        window.location.reload();
        }
    )

    playerOneName.addEventListener("keyup", renderTurnMessage);
    playerTwoName.addEventListener("keyup", renderTurnMessage);

    // return {
    //     start: switchTurn
    // };

})();