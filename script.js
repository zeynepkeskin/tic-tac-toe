var nums = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9"
]

var game = [
    "", "", "",
    "", "", "",
    "", "", ""
]

var clicks = 0;

let turn = "x";

function start() {
    let board = document.getElementById("board");
    for (i = 1; i < 4; i++) {
        board.innerHTML += "<span class='" + i + "' onclick='clicked(this)'>0</span>";
    }
    board.innerHTML += "<br>";
    for (i = 4; i < 7; i++) {
        board.innerHTML += "<span class='" + i + "' onclick='clicked(this)'>0</span>";
    }
    board.innerHTML += "<br>";
    for (i = 7; i < 10; i++) {
        board.innerHTML += "<span class='" + i + "' onclick='clicked(this)'>0</span>";
    }
    board.innerHTML += "<br>";
}

function clicked(elm) {
    clicks += 1;
    if (elm.innerHTML !== "0") {
        alert("This space is already filled")
        return
    }
    if (turn == "x") {
        elm.innerHTML = "X"
        turn = "o"
        elm.style.color = "red";
    }
    else {
        elm.innerHTML = "O"
        turn = "x";
        elm.style.color = "blue";
    }
    for (i = 0; i < game.length; i++) {
        if (nums[i] == elm.className) {
            if (turn == "x") game[i] = "o"
            else game[i] = "x"
        }
    }
    if (clicks > 1) {
        checkGameOver()
    }

}

function checkGameOver() {
    for (i = 0; i < 7; i += 3) {
        if (game[i] == "x" || game[i] == "o") {
            if (game[i] == game[i + 1] && game[i + 1] == game[i + 2]) alert(game[i] + " WINS")
        }
    }
    for (i = 0; i < 4; i += 1) {
        if (game[i] == "x" || game[i] == "o") {
            if (game[i] == game[i + 3] && game[i + 3] == game[i + 6]) alert(game[i] + " WINS")
        }
    }
    if(game[0] == "x" || game[0] == "o"){
        if(game[0] == game[4] && game[4] == game[8]) alert(game[i] + " WINS")
    }
    if(game[2] == "x" || game[2] == "o"){
        if(game[2] == game[4] && game[4] == game[6]) alert(game[i] + " WINS")
    }
}


