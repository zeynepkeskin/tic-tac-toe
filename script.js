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
    if (turn == "X") {
        elm.style.backgroundImage = "url('img/x.png')";
        turn = "O"
        elm.innerHTML = "O";
    }
    else {
        elm.style.backgroundImage = "url('img/o.png')";
        elm.innerHTML = "X";
        turn = "X"

    }
    for (i = 0; i < game.length; i++) {
        if (nums[i] == elm.className) {
            if (turn == "X") game[i] = "O"
            else game[i] = "X"
        }
    }
    if (clicks > 1) {
        checkGameOver()
    }

}

function gameOver(){
    document.getElementById("winner").innerHTML = game[i] + " WINS"
    document.getElementById("end").style.display = 'block';
    document.getElementById("winner").style.display = 'none';
    document.getElementById("playagain").style.display = 'none';

    setTimeout(() => { 
        document.getElementById("smile").style.display = 'none'; 
        document.getElementById("winner").style.display = 'block';
        document.getElementById("playagain").style.display = 'block';
    }, 2000);
}

function checkGameOver() {
    for (i = 0; i < 7; i += 3) {
        if (game[i] == "X" || game[i] == "O") {
            if (game[i] == game[i + 1] && game[i] == game[i + 2])gameOver()
        }
    }
    for (i = 0; i < 4; i += 1) {
        if (game[i] == "X" || game[i] == "O") {
            if (game[i] == game[i + 3] && game[i + 3] == game[i + 6]) gameOver()
        }
    }
    if (game[0] == "X" || game[0] == "O") {
        if (game[0] == game[4] && game[4] == game[8]) gameOver()
    }
    if (game[2] == "X" || game[2] == "O") {
        if (game[2] == game[4] && game[4] == game[6]) gameOver()
    }
}


