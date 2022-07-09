import { cardsCreate } from './cardsCreate.js';
import { cardsRebootGame } from './viwe.js'


function rebootGame(textHeader, amountCards, timer, cancelBtn) {
  const container = document.querySelector('.container')
  const rebootWindow = cardsRebootGame()
  cancelBtn.style.display = 'none'



  rebootWindow.headerInfo.textContent = textHeader;

  rebootWindow.buttonRestart.addEventListener('click', () => {

    container.querySelector('.ul').remove()
    container.querySelector('.timer').remove()
    document.querySelector('.b-popup').remove()

    cardsCreate( amountCards, timer, container, cancelBtn)

  })

  rebootWindow.buttonExit.addEventListener('click', () => {

    container.querySelector('.ul').remove()
    container.querySelector('.timer').remove()
    document.querySelector('.b-popup').remove()
    document.querySelector('.form').style.display = 'flex'

  })

}

export { rebootGame }
