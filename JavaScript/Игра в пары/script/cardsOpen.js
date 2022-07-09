import { rebootGame } from './cardsEndGame.js'

function cardsOpen (arrayCards, amountCards, timer, cancelBtn) {
  const cardsShow = []
  const cardsGuessed = []

  for( let cards of arrayCards ){

    cards.addEventListener('click', (event) => {

      cardsShow.push(event.target)

      event.target.classList.remove('icon-opacity')

      event.target.style.pointerEvents = "none";
      event.currentTarget.style.pointerEvents = "none";

      if( cardsShow.length === 3 ){
        if(cardsShow[0].src !== cardsShow[1].src){
          cardsShow[0].classList.add('icon-opacity')
          cardsShow[1].classList.add('icon-opacity')

          cardsShow[0].style.pointerEvents = "auto";
          cardsShow[1].style.pointerEvents = "auto";

          cardsShow[0].parentNode.style.pointerEvents = "auto";
          cardsShow[1].parentNode.style.pointerEvents = "auto";
        }

        cardsShow.splice(0,2)
      }

      if(cardsShow.length === 2 && cardsShow[0].src === cardsShow[1].src){
        cardsGuessed.push(cardsShow[0], cardsShow[1])
      }

      if( cardsGuessed.length === arrayCards.length) return rebootGame('Вы победили!', amountCards, timer, cancelBtn);

    })

  }

  const listRemove = document.querySelector('.ul')
  const timerRemove = document.querySelector('.timer')

  cancelBtn.addEventListener('click', () => {
    listRemove.remove()
    timerRemove.remove()
    document.querySelector('.form').style.display = 'flex'
    cancelBtn.style.display = "none";
  })

}

export { cardsOpen }
