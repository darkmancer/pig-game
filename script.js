'use strict';
let player1 = 0;
let player2 = 0;
let accuNum = 0;
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let rollBtn = document.querySelector(".btn--roll");
let p1Scoreshow = document.querySelector("#score--0");
let p1curshow = document.querySelector("#current--0");
let p2Scoreshow = document.querySelector("#score--1");
let p2curshow = document.querySelector("#current--1");
let holdBtn = document.querySelector(".btn--hold");
let newGame = document.querySelector(".btn--new");
let diceEl = document.querySelector('.dice');
rollBtn.addEventListener('click', p1Roll);
holdBtn.addEventListener('click', keepScoreP1);
newGame.addEventListener('click', reset);


function randomDice() {
    let ranNum = Math.floor((Math.random() * 6) +1) ;
    return ranNum;
}



function p1Roll() {
   
    let ranNum = randomDice();
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${ranNum}.png`;
    console.log(ranNum);
    if(ranNum==1){
        accuNum = 0;
        p1curshow.innerHTML = 0;
        switchToP2();
        return;
    }
    accuNum += ranNum;
    p1curshow.innerHTML = accuNum;
    console.log(accuNum)
  
}
function p2Roll() {
   
    let ranNum = randomDice();
    console.log(ranNum);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${ranNum}.png`;
    if(ranNum==1){
        accuNum = 0;
        p2curshow.innerHTML = 0;
        switchToP1();
        return;
    }
    accuNum += ranNum;
    p2curshow.innerHTML = accuNum;
    console.log(accuNum)
}

function keepScoreP1() {
    player1 += accuNum;
    p1Scoreshow.innerHTML = player1;
    accuNum = 0;
    p1curshow.innerHTML = 0;
    switchToP2();
    checkGameEnd();
}

function keepScoreP2() {
    player2 += accuNum;
    p2Scoreshow.innerHTML = player2;
    accuNum = 0;
    p2curshow.innerHTML = 0;
    switchToP1();
    checkGameEnd();
}

function reset(){
    player1 =0;
    player2 =0;
    accuNum =0;
    p1Scoreshow.innerHTML = 0;
    p2Scoreshow.innerHTML = 0;
    p2curshow.innerHTML = 0;
    p1curshow.innerHTML = 0;
    rollBtn.removeEventListener('click', p1Roll)
    holdBtn.removeEventListener('click', keepScoreP1)
    rollBtn.removeEventListener('click', p2Roll)
    holdBtn.removeEventListener('click', keepScoreP2)
    rollBtn.addEventListener('click', p1Roll)
    holdBtn.addEventListener('click', keepScoreP1)
    player1El.classList.remove('player--winner');
    player0El.classList.remove('player--winner');
}

function switchToP2(){
    rollBtn.removeEventListener('click', p1Roll)
    holdBtn.removeEventListener('click', keepScoreP1)
    rollBtn.addEventListener('click', p2Roll)
    holdBtn.addEventListener('click', keepScoreP2)
    console.log("switch completed")
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

function switchToP1(){
    rollBtn.removeEventListener('click', p2Roll)
    holdBtn.removeEventListener('click', keepScoreP2)
    rollBtn.addEventListener('click', p1Roll)
    holdBtn.addEventListener('click', keepScoreP1)
    console.log("switch completed")
    player1El.classList.toggle('player--active');
    player0El.classList.toggle('player--active');
}

function checkGameEnd(){
    if(player1 >= 100 || player2 >= 100){
    rollBtn.removeEventListener('click', p1Roll)
    holdBtn.removeEventListener('click', keepScoreP1)
    rollBtn.removeEventListener('click', p2Roll)
    holdBtn.removeEventListener('click', keepScoreP2)
    }
    if(player1 >= 100){
        player0El.classList.add('player--winner');

    }else if(player2 >= 100){
        player1El.classList.add('player--winner');
    }
}




