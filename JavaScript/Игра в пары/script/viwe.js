
function cardsRebootGame(){
  const body = document.getElementById('body')

  const popup = document.createElement('div');
  popup.classList.add('b-popup')

  const popupContent = document.createElement('div');
  popupContent.classList.add('b-popup-content')

  const headerInfo = document.createElement('h1')
  headerInfo.classList.add('header')

  const buttonRestart = document.createElement('button');
  buttonRestart.classList.add('popup-btn-rebot');
  buttonRestart.textContent = 'Переиграть!';

  const buttonExit = document.createElement('button');
  buttonExit.classList.add('popup-btn-exit');
  buttonExit.textContent = 'Выйти!'

  body.append(popup)
  popup.append(popupContent)
  popupContent.append(headerInfo)
  popupContent.append(buttonRestart)
  popupContent.append(buttonExit)

  return{
    buttonRestart,
    buttonExit,
    headerInfo,
  }

}

function cancel(){

  const btncancel = document.createElement('button');
  btncancel.innerHTML = `
                      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.09082" width="29.5699" height="2.95699" transform="rotate(45 2.09082 0)" fill="#333333"/>
                        <rect y="20.9092" width="29.5699" height="2.95699" transform="rotate(-45 0 20.9092)" fill="#333333"/>
                      </svg>
                        `
  btncancel.classList.add('btn-cancel')
  btncancel.style.display = 'none'

  return {btncancel}

}

function сreateForm(){
  const form = document.createElement('form');
  form.classList.add('form')

  const inputVertical = document.createElement('input');
  inputVertical.setAttribute('type', 'number')
  inputVertical.setAttribute('placeholder', '2-8(только чет)')
  inputVertical.setAttribute('required', 'required')

  const inputHorizontal = document.createElement('input');
  inputHorizontal.setAttribute('type', 'number')
  inputHorizontal.setAttribute('placeholder', '2-8(только чет)')
  inputHorizontal.setAttribute('required', 'required')


  const timerForm = document.createElement('input')
  timerForm.classList.add('form__time')
  timerForm.setAttribute('type', 'time')
  timerForm.setAttribute('name', 'Время')

  const buttonForm = document.createElement('button')
  buttonForm.classList.add('form__button')
  buttonForm.textContent = 'Играть'

  form.append(inputVertical)
  form.append(inputHorizontal)
  form.append(timerForm)
  form.append(buttonForm)


  return {
    form,
    inputVertical,
    inputHorizontal,
    timerForm,
    buttonForm
  }
}

function createTimer() {
  const elemTimer = document.createElement('div');
  elemTimer.classList.add('timer')
  return elemTimer
}

function createList() {
  const list = document.createElement('ul');
  list.classList.add('ul');
  return list;
}

function createListChaild(srcIcon){
  const listChild = document.createElement('li')
  listChild.classList.add('li');

  const listChildIcon = document.createElement('img')
  listChildIcon.classList.add('li__icon')
  listChildIcon.setAttribute('src', srcIcon);

  listChild.append(listChildIcon)

  return {
    listChild,
    srcIcon,
  }
}


export { сreateForm, createList, createListChaild, createTimer, cardsRebootGame, cancel }
