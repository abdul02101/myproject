(()=>{
  function buttonRebootGame(){
    const body = document.getElementById('body')
    const buttonRestart = document.createElement('button');
    const buttonExit = document.createElement('button');
    const headerInfo = document.createElement('h1')

    headerInfo.classList.add('header')

    buttonRestart.classList.add('body-btn-rebot');
    buttonRestart.textContent = 'Переиграть!';

    buttonExit.classList.add('body-btn-exit');
    buttonExit.textContent = 'Выйти!'

    return{
      body,
      buttonRestart,
      buttonExit,
      headerInfo,
    }

  }

  function сreateField(){
    const form = document.querySelector('form');
    const inputVer = document.getElementById('inputVert');
    const inputHor = document.getElementById('inputHoriz');
    const timer = document.getElementById('time');


    return {
      form,
      inputVer,
      inputHor,
      timer,
    }
  }
  function createList() {
    const list = document.createElement('ul');
    list.classList.add('ul');
    return list;
  }

  function createTimer(minuteContent = 0, secondContent = 0) {
    const elemTimer = document.createElement('div');
    elemTimer.classList.add('timer');
    elemTimer.textContent = `${minuteContent}:${secondContent}`;

    return {
      elemTimer,
      minuteContent,
      secondContent,
    };
  }

  function createItem(name){
    const item = document.createElement('li')
    item.classList.add('li');
    item.textContent = name;

    return {
      item,
      name,
    }
  }

  function createApp(container){
    const itemForm = сreateField();
    const list = createList();
    const buttonReboot = buttonRebootGame();
    container.append(list);

    function displayGame(){
      if(buttonReboot.buttonExit.classList.contains('display-none') || buttonReboot.body.style.backgroundColor == 'transparent'){
        buttonReboot.body.style.backgroundColor = 'rgba(108,110,108, 50%)';
        buttonReboot.body.style.pointerEvents = 'none';
        buttonReboot.buttonExit.classList.remove('display-none');
        buttonReboot.buttonRestart.classList.remove('display-none');
        buttonReboot.headerInfo.classList.remove('display-none');
      }
    }


    let timerId = null;


    //создания игрового поля
    function crateAmountCards(amount, minute, second, arrayCards){
      //алгоритм фишера перемешивания чисел
      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

      function exitToForm(){
        itemForm.form.classList.remove('display-none');
        buttonReboot.body.style.backgroundColor = 'transparent';
        buttonReboot.body.style.pointerEvents = 'painted';
        let deleteElemLi = list.querySelectorAll('li');
        let mas = [buttonReboot.buttonExit, buttonReboot.headerInfo, buttonReboot.buttonRestart, timerApp.elemTimer];
        for(let i of mas){
          i.remove();
        }
        for(let j of deleteElemLi){
          j.remove();
        }
      }

      function timerFunc(timerMinute, timerSecond){
        timerId = setInterval(()=>{
          if(timerSecond != 0){
            timerSecond -= 1;
          }else if(timerMinute == 0){
            clearInterval(timerId);
          }
          else{
            timerMinute -= 1;
            timerSecond = 60;
          }
          if(timerSecond == 0 && timerMinute == 0){
            clearInterval(timerId);
            buttonReboot.body.classList.add('body-class')
            container.append(buttonReboot.buttonRestart);
            container.append(buttonReboot.buttonExit);
            container.append(buttonReboot.headerInfo);

            buttonReboot.headerInfo.textContent = "Вы проиграли!"

            displayGame()

            buttonReboot.buttonRestart.addEventListener('click', ()=> {
              createField(true);
            });

            buttonReboot.buttonExit.addEventListener('click', ()=> {
              exitToForm();
            });

          }

          timerApp.elemTimer.textContent = `${timerMinute}:${timerSecond}`

        },1000)
      }

      function winToCards(){
        clearInterval(timerId)
        objectCardsDone = [];
        buttonReboot.body.classList.add('body-class')
        container.append(buttonReboot.buttonRestart);
        container.append(buttonReboot.buttonExit);
        container.append(buttonReboot.headerInfo);

        buttonReboot.headerInfo.textContent = "Вы выиграли!"

        displayGame();

        buttonReboot.buttonRestart.addEventListener('click', ()=> {
          createField(true);

        });

        buttonReboot.buttonExit.addEventListener('click', ()=> {
          exitToForm();

        });
      }

      //убираю форму
      itemForm.form.classList.add('display-none')

      //передаю в таймер значения
      const timerApp = createTimer(minute, second);

      //добавляю в контейнер
      container.append(timerApp.elemTimer);


      let cardsOpen = [];
      let objectCardsDone = [];

      function createField(clearList = false){
        if(clearList == true){
          let elemLi = list.querySelectorAll('li');
          for(let i of elemLi){
            i.remove();
          }

          buttonReboot.body.style.backgroundColor = 'transparent';
          buttonReboot.body.style.pointerEvents = 'painted';
          buttonReboot.buttonExit.classList.add('display-none');
          buttonReboot.buttonRestart.classList.add('display-none');
          buttonReboot.headerInfo.classList.add('display-none');

          cardsOpen = []

          timerFunc(minute, second);
        }

        arrayCards = shuffle(arrayCards);

        for(let i = 0; i<amount; i++){

          const itemList = createItem(arrayCards[i], false, i);
          list.append(itemList.item);

          itemList.item.addEventListener('click', ()=>{
            //чтобы быстро не исчезала
            itemList.item.style.transition = "color .3s ease-in-out"
            //добавляет цвет эдементу на который нажали
            itemList.item.style.color = "black";
            //не похволяет второй раз нажать на элемент
            itemList.item.style.pointerEvents = "none";
            //добавляем элемент в массив
            cardsOpen.push(itemList.item);

            //если элементов больше трех
            if(cardsOpen.length > 3){
              cardsOpen.splice(0,2)
            }


            if(cardsOpen.length == 3){
              const oneCards = cardsOpen[0];
              const twoCards = cardsOpen[1];
              //если текс первой не равен, добавляем транспарент
              if(oneCards.textContent != twoCards.textContent){

                oneCards.style.color = 'transparent';
                twoCards.style.color = 'transparent';

                oneCards.style.pointerEvents = 'auto';
                twoCards.style.pointerEvents = 'auto';
              }
            }else if(cardsOpen.length == 2){
              if(cardsOpen[0].textContent == cardsOpen[1].textContent){
                objectCardsDone.push(cardsOpen[0]);
                objectCardsDone.push(cardsOpen[1]);
              }
              if(objectCardsDone.length == amount){
                winToCards();
              }
            }
          });

        }
      }

      createField();
      clearInterval(timerId);
      timerFunc(minute, second);
    }


    itemForm.form.addEventListener('submit', (e)=>{
      e.preventDefault();

      const vertical = itemForm.inputVer.value;
      const horizontal = itemForm.inputHor.value;

      let amountCards = vertical * horizontal
      //для массива парных чисел
      let arrayAdd = amountCards/2;

      let array = [];

      //Чтобы  разделить менуты и секунды и перевести в число
      const timerValue = itemForm.timer.value;
      let timerMinute = parseInt(timerValue[0]+timerValue[1]);
      let timerSecond = parseInt(timerValue[3]+timerValue[4]);

      //проверяем верность введенных значений в форме
      if(vertical < 2 || horizontal < 2
        || isNaN(vertical) == true || isNaN(horizontal) == true
        || vertical > 10 || horizontal > 10
        || vertical % 2 != 0 || horizontal % 2 != 0
        ){
        amountCards = 16;
        arrayAdd = amountCards/2;
        for(let i = 1;i <= arrayAdd; i++){
          array.push(i);
          array.push(i);
        }
        crateAmountCards(amountCards, timerMinute, timerSecond, array);
      }else{
        for(let i = 1;i <= arrayAdd; i++){
          array.push(i);
          array.push(i);
        }
        crateAmountCards(amountCards, timerMinute, timerSecond, array);
      }

    })

  }
  window.createApp = createApp;
})()
