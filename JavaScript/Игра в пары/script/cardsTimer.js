import { rebootGame } from "./cardsEndGame.js";

function timerCards(timerMinute, timerSecond, timerCreate, amountCards, timer, cancelBtn){
  let timerId = setInterval(function () {

    if(timerSecond == 0){
      --timerMinute;
      timerSecond = 60;
    }
    --timerSecond;


    if(timerMinute == 0 && timerSecond == 0){
      clearInterval(timerId);
      rebootGame('Время вышло!', amountCards, timer, cancelBtn)
    }

    if(document.querySelector('.b-popup') || document.querySelector('.form').style.display === 'flex' ) clearInterval(timerId)

    timerCreate.textContent = `${timerMinute}:${timerSecond}`
  }, 1000)
}

export { timerCards }

