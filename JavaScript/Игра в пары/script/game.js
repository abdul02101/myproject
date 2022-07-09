import { сreateForm, cancel } from '../script/viwe.js'
import { inputChange } from '../script/helpers/inputValue.js'
import { cardsCreate } from '../script/cardsCreate.js'

const container = document.getElementById('container')
const itemForm = сreateForm();

const cancelBtn = cancel()


container.append(itemForm.form);
container.append(cancelBtn.btncancel);
inputChange(itemForm.inputVertical)
inputChange(itemForm.inputHorizontal)


itemForm.form.addEventListener('submit', (e) => {

  e.preventDefault()

  const amountCards = Number(itemForm.inputVertical.value) + Number(itemForm.inputHorizontal.value)


  let timerForm = itemForm.timerForm.value
  timerForm = timerForm ? timerForm.split(":") : ''

  e.target.style.display = 'none'

  cardsCreate(amountCards, timerForm, container, cancelBtn.btncancel)

  itemForm.inputVertical.value= ''
  itemForm.inputHorizontal.value = ''
  itemForm.timerForm.value = ''

})
