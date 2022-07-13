import {createList, createItem, containerGym, btnBack} from './generatorView.js'
  import {arrData} from '../Data/dataGenerator.js'
  import {shuffle} from '../Helpers/shuffle.js'
  const generBody = document.querySelector('.create-generator')
  const containerGener = document.querySelector('.container-gener')
  const hrefMain = document.querySelector(".logo-block-generator")
  const container = containerGym()
  const backBtn = btnBack()
  
  function createGenerator(formInfo) {
    generBody.append(container)
    container.append(backBtn)

    hrefMain.addEventListener('click', () => {
      container.innerHTML = ''
      containerGener.style.display = 'flex'
    })

    backBtn.addEventListener('click', () => {
      container.innerHTML = ''
      containerGener.style.display = 'flex'
    })

    formInfo.arrayWorld.forEach(el => {
      const list = createList(arrData[el.id].header)
      container.append(list)

      if (arrData[el.id]) {
        let arrWorld = arrData[el.id].data

        if (formInfo.shakeWorld) {
          arrWorld = arrData[el.id].data.map(elemem => {
            return elemem
          })
          shuffle(arrWorld)
        }

        for (let i = 0; i < el.amount; ++i) {
          const dataWorld = arrWorld[i]
          const dataVideo = formInfo.radioChoice === 'video' ? dataWorld.video : null
          const childList = createItem(dataWorld.photo, dataWorld.text, dataWorld.name, dataVideo, dataWorld.header)
          list.append(childList)
        }
      }
    })
  }

  export {createGenerator}