const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');

const paperC = document.getElementById('paperC');
const rockC = document.getElementById('rockC');
const scissorsC = document.getElementById('scissorsC');

const winLoseText = document.getElementById('winLoseText');
const scoreText = document.getElementById('scoreText');

const computer = document.getElementById('computer');
const nextRoundButton = document.getElementById('nextRound');

let score = 0;
let scoreC = 0;

//0 = paper | 1 = Rock | 2 = Scissors
let choice, choiceC;

function selectPaper(){
    rock.style.display = "none";
    scissors.style.display = "none";
    paper.style.pointerEvents = 'none';
    choice = 0;
    computerTurn();
}

function selectRock(){
    paper.style.display = "none";
    scissors.style.display = "none";
    rock.style.pointerEvents = 'none';
    choice = 1;
    computerTurn();
}

function selectScissors(){
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.pointerEvents = 'none';
    choice = 2;
    computerTurn();
}

function computerTurn(){
    let random = Math.floor(Math.random() * 3);
    switch(random){
        case 0: {
            rockC.style.display = "none";
            scissorsC.style.display = "none";
            choiceC = 0;
        } break;
        case 1: {
            scissorsC.style.display = "none";
            paperC.style.display = "none";
            choiceC = 1;
        } break;
        case 2: {
            paperC.style.display = "none";
            rockC.style.display = "none";
            choiceC = 2;
        } break;
    }
    computer.style.display = "block";
    nextRoundButton.style.display = "block";

    whoWon();
}

function whoWon(){
    //0 = paper | 1 = Rock | 2 = Scissors
    if((choice == 0 && choiceC == 1) || (choice == 1 && choiceC == 2) || (choice == 2 && choiceC == 0)){
        score++;
        winLoseText.textContent = "Nyertél! :)";
        winLoseText.style.color = "green";
    }else if((choice == 0 && choiceC == 2) || (choice == 1 && choiceC == 0) || (choice == 2 && choiceC == 1)){
        scoreC++;
        winLoseText.textContent = "Vesztettél!";
        winLoseText.style.color = "red";
    }
    else{
        winLoseText.textContent = "Döntetlen!";
    }

    updateScoreText();
}

function updateScoreText(){
    scoreText.textContent = score + " - " + scoreC;
}

function nextTurn(){
    winLoseText.textContent = "";
    winLoseText.style.color = "black";

    rock.style.display = "block";
    paper.style.display = "block";
    scissors.style.display = "block";

    paper.style.pointerEvents = 'auto';
    rock.style.pointerEvents = 'auto';
    scissors.style.pointerEvents = 'auto';

    rockC.style.display = "block";
    scissorsC.style.display = "block";
    paperC.style.display = "block";

    computer.style.display = "none";
    nextRoundButton.style.display = "none";
}
