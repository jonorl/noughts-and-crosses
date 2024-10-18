(function() {
    document.addEventListener("DOMContentLoaded", () => {

    // Variables from DOM
    let playerOneName = document.querySelector(".name1");
    let playerTwoName = document.querySelector(".name2");
    let turnMessage = document.querySelector(".turnIndicator");
    let blocks = document.querySelectorAll(".block");
    let btn = document.querySelector(".reset")

    // Other variables
    let gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let turnMarker = "X";
    let currentPlayer
    let clickedBlock = undefined;

    // Main functions
    function handleClick(e) {
        clickedBlock = e.target.getAttribute("id");
        if(playerOneName.value === "" || playerTwoName.value === ""){
            renderErrorMessage();
        }
        else if ((gameboard[clickedBlock] === "X" || gameboard[clickedBlock] === "O")){
                turnMessage.innerHTML = "Box already selected";
                return;
            }
        else {
            changeTurn(e);
            }
        }

    function changeTurn(e) {
        gameboard[clickedBlock] = turnMarker
        e.target.innerHTML = turnMarker;
        checkWinCondition();
    }

    function renderTurnMessage(){
        if(playerOneName.value === "" || playerTwoName.value === ""){
            renderErrorMessage();
        }
        else {
            turnMarker = (turnMarker === "X") ? "O" : "X";
            currentPlayer = (currentPlayer === playerOneName.value) ? playerTwoName.value :playerOneName.value;
            turnMessage.style.color = "black";
            turnMessage.innerHTML = currentPlayer + " (" + turnMarker + "), please play now"
        }
    }

    function renderErrorMessage(){
            turnMessage.style.color = "red";
            turnMessage.innerHTML = "Please enter player names";
    }

    function checkWinCondition(){
        if (gameboard[0] === turnMarker && gameboard[1] === turnMarker && gameboard[2] === turnMarker) {
            turnMessage.innerHTML = currentPlayer + " won!";
            disableEventListeners();
        }
        else if (gameboard[3] === turnMarker && gameboard[4] === turnMarker && gameboard[5] === turnMarker) {
            turnMessage.innerHTML = currentPlayer + " won!";
            disableEventListeners();
        }
        else if (gameboard[6] === turnMarker && gameboard[7] === turnMarker && gameboard[8] === turnMarker) {
            turnMessage.innerHTML = currentPlayer + " won!";
            disableEventListeners();
        }
        else if (gameboard[0] === turnMarker && gameboard[3] === turnMarker && gameboard[6] === turnMarker) {
            turnMessage.innerHTML = currentPlayer + " won!";
            disableEventListeners();
        }
        else if (gameboard[1] === turnMarker && gameboard[4] === turnMarker && gameboard[7] === turnMarker) {
            turnMessage.innerHTML = currentPlayer + " won!";
            disableEventListeners();
        }
        else if (gameboard[2] === turnMarker && gameboard[5] === turnMarker && gameboard[8] === turnMarker) {
            turnMessage.innerHTML = currentPlayer + " won!";
            disableEventListeners();
        }
        else if (gameboard[0] === turnMarker && gameboard[4] === turnMarker && gameboard[8] === turnMarker) {
            turnMessage.innerHTML = currentPlayer + " won!";
            disableEventListeners();
        }
        else if (gameboard[2] === turnMarker && gameboard[4] === turnMarker && gameboard[6] === turnMarker) {
            turnMessage.innerHTML = currentPlayer + " won!";
            disableEventListeners();
        }
        else if (gameboard.every(value => value === "X" || value === "O")){
            turnMessage.innerHTML = "It's a tie!";
            disableEventListeners();
        }
        else renderTurnMessage();
    }

    //Auxiliary functions
    function handleInput() {
        if(playerOneName.value === "" || playerTwoName.value === ""){
            renderErrorMessage
        }
        else {
            currentPlayer = playerOneName.value
            turnMessage.style.color = "black";
            turnMessage.innerHTML = currentPlayer + " (" + turnMarker + "), please play now"
            }
        }

    function disableEventListeners() {
        blocks.forEach(block => {
            block.removeEventListener("click", handleClick);
        });
    }

    function debounce(func, delay) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(func, delay);
        };
    }

    // Event listeners
    blocks.forEach(block => {
        block.addEventListener("click", handleClick);
    });
    
    btn.addEventListener("click", function() {
        window.location.reload();
        }
    );

    playerOneName.addEventListener("input", debounce(handleInput, 500));

    playerTwoName.addEventListener("input", debounce(handleInput, 500));

});
})();