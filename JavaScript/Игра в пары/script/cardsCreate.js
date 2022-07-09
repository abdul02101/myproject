import { createList, createListChaild, createTimer } from './viwe.js'
import { arrayIcon } from './iconArray.js'
import { shuffle } from './helpers/shuffle.js'
import { cardsOpen } from './cardsOpen.js'
import { timerCards } from './cardsTimer.js'


function cardsCreate(amountCards, timer, container, cancelBtn ){
  container.style.pointerEvents = "none";
  cancelBtn.style.display = "block";

  const list = createList();
  container.append(list)

  const addTimerCards = createTimer()
  container.append(addTimerCards)

  if(timer) timerCards(timer[0], timer[1], addTimerCards, amountCards, timer, cancelBtn);


  shuffle(arrayIcon)

  const arraIconCards = []

  for(let i = 0; i < amountCards/2; ++i){
    arraIconCards.push(arrayIcon[i])
    arraIconCards.push(arrayIcon[i])
  }

  shuffle(arraIconCards)

  for(let i = 0; i < amountCards; ++i){
    const listChild = createListChaild(arraIconCards[i]);
    list.append(listChild.listChild)
  }

  setTimeout(() => {
    const iconChild = container.querySelectorAll('.li__icon')
    container.style.pointerEvents = "auto";
    for(let icon of iconChild){
      icon.classList.add('icon-opacity')
    }
  }, 1000)


  const cardsChild = container.querySelectorAll('.li')


  cardsOpen(cardsChild, amountCards, timer, cancelBtn)


}

export { cardsCreate }
