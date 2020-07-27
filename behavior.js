/* functions */
let players = ["Player1","Player2"];
let scores = [0,0];
let lastWinner = 0;

function roll(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector('.img1').setAttribute('src','images/dice' + randomNumber1 + '.png');
    document.querySelector('.img2').setAttribute('src','images/dice' + randomNumber2 + '.png');
    winner(randomNumber1,randomNumber2);
    update(scores);
}

function winner(randomNumber1,randomNumber2){
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

function update(arr){
    if ( scores[0] > scores[1] ){
        document.querySelector('.score-winner').textContent = scores[0];
        document.querySelector('.score-loser').textContent = scores[1];
        document.querySelector('.player-winner').textContent = 'Player1';
        document.querySelector('.player-loser').textContent = 'Player2';
    }
    else if ( scores[1] > scores[0]) {
        document.querySelector('.score-winner').textContent = scores[1];
        document.querySelector('.score-loser').textContent = scores[0];
        document.querySelector('.player-winner').textContent = 'Player2';
        document.querySelector('.player-loser').textContent = 'Player1';
    }
    else {
        document.querySelector('.score-loser').textContent = scores[lastWinner];
    }
}

/* when initialize */
document.querySelector('h1').textContent = "Row dice!";

/* events listeners */
button = document.querySelector('#btn');
button.addEventListener('click',roll);