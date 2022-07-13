import {createGenerator} from './generatorCreate.js'

  const worldElemList = document.querySelectorAll('.child-list-generator-2');
  const formGenerator = document.querySelector('.form-gener')
  const btnGener = formGenerator.querySelector('.btn-generator')
  const inputGeneratorAll = document.querySelectorAll('.input-generator')
  const radioAll = document.querySelectorAll('.label-input-gener')
  const formCheckbox = document.querySelector('.gen-bot__form-chekbox')
  const generatorContainer = document.querySelector('.container-gener')

  const choiceWorld = {
    arrayWorld: []
  }
  worldElemList.forEach((el) => {
    const radioOkey = el.querySelector('.grop-okey')
    const inputGenerator = el.querySelector('.input-generator')

    el.addEventListener('click', (e) => {
      inputGenerator.addEventListener('keypress', (event) => {
        if (!Number(event.key)) return event.preventDefault();
      })

      if (e.target === inputGenerator) return;

      radioOkey.classList.toggle('active')
      inputGenerator.classList.toggle('active')

      if (radioOkey.classList.contains('active')) {
        choiceWorld.arrayWorld.push({
          id: el.dataset.path,
          nameWorld: el.dataset.path
        })
      } else if (!radioOkey.classList.contains('active')) {
        choiceWorld.arrayWorld.forEach((elWorld, i, arrWorld) => {
          if (elWorld.id === el.dataset.path) {
            arrWorld.splice(i, 1)
          }
        })
      }

      if (choiceWorld.arrayWorld.length == 0) return btnGener.classList.add('btn-generator-active')

      btnGener.classList.remove('btn-generator-active')
    })
  })

  formGenerator.addEventListener('submit', (e) => {
    e.preventDefault()

    inputGeneratorAll.forEach((elInput, i) => {
      choiceWorld.arrayWorld.forEach(elWorld => {
        if (elWorld.id !== elInput.name) return
        if (elInput.name === 'allWorld' && elInput.value > 27 || elInput.value === '') elInput.value = 27
        if (elInput.value > 9 && elInput.name !== 'allWorld') elInput.value = 9
        if (elInput.value === '') elInput.value = 9
        elWorld.amount = Number(elInput.value)
      })
    })

    radioAll.forEach(el => {
      if (el.checked) {
        choiceWorld.radioChoice = el.value
      }
    })

    choiceWorld.shakeWorld = formCheckbox.checked
    generatorContainer.style.display = 'none'
    createGenerator(choiceWorld)
  })