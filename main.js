(function() {
    document.addEventListener("DOMContentLoaded", () => {

    // Player constructor
    function Player(name, marker) {
        this.name = name;
        this.marker = marker;
    }

    // Variables from DOM
    let playerOneName = document.querySelector(".name1");
    let playerTwoName = document.querySelector(".name2");
    let turnMessage = document.querySelector(".turnIndicator");
    let blocks = document.querySelectorAll(".block");
    let btn = document.querySelector(".reset")

    // Other variables
    let gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let turnMarker = true;
    let clickedBlock;

    function renderTurnMessage(){
        let playerOne = new Player(playerOneName.value, "X");
        let playerTwo = new Player(playerTwoName.value, "O");

        if(playerOneName.value === "" || playerTwoName.value === ""){
            turnMessage.style.color = "red";
            turnMessage.innerHTML = "Please enter player names";
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

    function checkWinCondition(){
        if (gameboard[0] === "X" && gameboard[1] === "X" && gameboard[2] === "X") {
            turnMessage.innerHTML = playerOneName.value + " won!";
            disableEventListeners();
            return;
        }
        else if (gameboard[3] === "X" && gameboard[4] === "X" && gameboard[5] === "X") {
            turnMessage.innerHTML = playerOneName.value + " won!";
            disableEventListeners();
            return;
        }
        else if (gameboard[6] === "X" && gameboard[7] === "X" && gameboard[8] === "X") {
            turnMessage.innerHTML = playerOneName.value + " won!";
            disableEventListeners();
            return;
        }
        else if (gameboard[0] === "X" && gameboard[3] === "X" && gameboard[6] === "X") {
            turnMessage.innerHTML = playerOneName.value + " won!";
            disableEventListeners();
            return;
        }
        else if (gameboard[1] === "X" && gameboard[4] === "X" && gameboard[7] === "X") {
            turnMessage.innerHTML = playerOneName.value + " won!";
            disableEventListeners();
            return;
        }
        else if (gameboard[2] === "X" && gameboard[5] === "X" && gameboard[8] === "X") {
            turnMessage.innerHTML = playerOneName.value + " won!";
            disableEventListeners();
            return;
        }
        else if (gameboard[0] === "X" && gameboard[4] === "X" && gameboard[8] === "X") {
            turnMessage.innerHTML = playerOneName.value + " won!";
            disableEventListeners();
            return;
        }
        else if (gameboard[2] === "X" && gameboard[4] === "X" && gameboard[6] === "X") {
            turnMessage.innerHTML = playerOneName.value + " won!";
            disableEventListeners();
            return;
        }
        else if (gameboard[0] === "O" && gameboard[1] === "O" && gameboard[2] === "O") {
            turnMessage.innerHTML = playerTwoName.value + " won!";
            disableEventListeners();
            return;
        }
        else if (gameboard[3] === "O" && gameboard[4] === "O" && gameboard[5] === "O") {
            turnMessage.innerHTML = playerTwoName.value + " won!";
            disableEventListeners();
            return;
        }
        else if (gameboard[6] === "O" && gameboard[7] === "O" && gameboard[8] === "O") {
            turnMessage.innerHTML = playerTwoName.value + " won!";
            disableEventListeners();
            return;
        }
        else if (gameboard[0] === "O" && gameboard[3] === "O" && gameboard[6] === "O") {
            turnMessage.innerHTML = playerTwoName.value + " won!";
            disableEventListeners();
            return;
        }
        else if (gameboard[1] === "O" && gameboard[4] === "O" && gameboard[7] === "O") {
            turnMessage.innerHTML = playerTwoName.value + " won!";
            disableEventListeners();
            return;
        }
        else if (gameboard[2] === "O" && gameboard[5] === "O" && gameboard[8] === "O") {
            turnMessage.innerHTML = playerTwoName.value + " won!";
            disableEventListeners();
            return;
        }
        else if (gameboard[0] === "O" && gameboard[4] === "O" && gameboard[8] === "O") {
            turnMessage.innerHTML = playerTwoName.value + " won!";
            disableEventListeners();
            return;
        }
        else if (gameboard[2] === "O" && gameboard[4] === "O" && gameboard[6] === "O") {
            turnMessage.innerHTML = playerTwoName.value + " won!";
            disableEventListeners();
            return;
        }
        else if (gameboard.every(value => value === "X" || value === "O")){
            turnMessage.innerHTML = "It's a tie!";
            disableEventListeners();
            return;
        }
        else renderTurnMessage();
    }

    function handleClick(e) {
        clickedBlock = e.target.getAttribute("id");
        if(playerOneName.value === "" || playerTwoName.value === ""){
            turnMessage.style.color = "red";
            turnMessage.innerHTML = "Please enter player names";
        }
        else if ((gameboard[clickedBlock] === "X" || gameboard[clickedBlock] === "O")){
                turnMessage.innerHTML = "Box already selected";
                return;
            }

        else {
            if (turnMarker === true) {
                gameboard[clickedBlock] = "X"
                e.target.innerHTML = "X";
                turnMarker = false;
                checkWinCondition();
            } 
            else if (turnMarker === false) {
                gameboard[clickedBlock] = "O"
                e.target.innerHTML = "O";
                turnMarker = true;
                checkWinCondition();
            }
        }
    }
    
    blocks.forEach(block => {
        block.addEventListener("click", handleClick);
    });

    function disableEventListeners() {
        blocks.forEach(block => {
            block.removeEventListener("click", handleClick);
        });
    }

    btn.addEventListener("click", function() {
        window.location.reload();
        }
    )

    playerOneName.addEventListener("keyup", renderTurnMessage);
    playerTwoName.addEventListener("keyup", renderTurnMessage);

});
})
();