/* functions */
let players = ["Player1","Player2"];
let scores = [0,0];
let lastWinner = 0;

function roll(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector('.img1').setAttribute('src','images/dice' + randomNumber1 + '.png');
    document.querySelector('.img2').setAttribute('src','images/dice' + randomNumber2 + '.png');
    diceWinner(randomNumber1,randomNumber2);
    updateRanking();
}

function diceWinner(randomNumber1,randomNumber2){
    if(randomNumber1 > randomNumber2){
        document.querySelector('h1').textContent = "Player 1 Wins!";
        scores[0] += 1;
        lastWinner = 0;
    }
    else if(randomNumber2 > randomNumber1){
        document.querySelector('h1').textContent = "Player 2 Wins!"
        scores[1] += 1;
        lastWinner = 1;
    }
    else{
        document.querySelector('h1').textContent = "Draw!"
    }
}

function updateRanking(){
    if ( scores[0] > scores[1] ){
        firstPlace(0,1);
    }
    else if ( scores[1] > scores[0]) {
        firstPlace(1,0);
    }
    else {
        document.querySelector('.score-loser').textContent = scores[lastWinner];
    }
}

function firstPlace (winner, loser){
    // winner
    document.querySelector('.score-winner').textContent = scores[winner];
    document.querySelector('.player-winner').textContent = players[winner];
    // loser
    document.querySelector('.score-loser').textContent = scores[loser];
    document.querySelector('.player-loser').textContent = players[loser];
}

/* when initialize */
// document.querySelector('h1').textContent = "Row dice!";

/* events listeners */
button = document.querySelector('#btn');
button.addEventListener('click',roll);