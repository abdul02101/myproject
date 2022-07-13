import {
  langArr
}
from "./Data/dataLang.js"

function changeLanguage() {
  for (let key in langArr) {
    let elem = document.querySelector(".lng-" + key)
    if (elem) {
      elem.innerHTML = langArr[key][myStorage["lang"]]
    }
  }
}

function loadGener() {
  createGenerator.style.display = "block"
  containerFooterGener.style.display = "block"
  main.style.display = "none"
  contactsContainer.style.display = "none"
  headerStyle.style.display = "none"
  menuSlide.style.display = ''
  window.location.hash = window.location.pathname + `generator`
  window.scrollTo(0, 0)
}

const myStorage = window.localStorage
if (!myStorage["lang"]) localStorage.setItem("lang", "ru")

const headerStyle = document.querySelector(".header-block")
const main = document.querySelector(".main")
const contactsContainer = document.querySelector(".contacts-container")
const btnBurger = document.querySelector(".header-burger-menu")
const btnCancel = document.querySelector(".btn-cancel")
const menuSlide = document.querySelector(".menu-slide")
const btnGeneratorMain = document.querySelector(".btn-generator-main")
const createGenerator = document.querySelector(".create-generator")
const containerFooterGener = document.querySelector(".container-footer")
const hrefMain = document.querySelector(".logo-block-generator")
const btnLang = document.querySelectorAll(".btn-lang")

changeLanguage()

if (window.location.hash.includes('/generator') && createGenerator.style.display === "none") {
  loadGener()
}

btnBurger.addEventListener("click", () => {
  menuSlide.style.display = "flex"
})

btnCancel.addEventListener("click", () => {
  menuSlide.style.display = "none"
})

const swiper = new Swiper(".swiper", {
  grabCursor: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    790: {
      slidesPerView: 2,
    },
  },
})

$(function() {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content",
  })
})

btnLang.forEach((el) => {
  el.addEventListener("click", () => {
    myStorage["lang"] = el.textContent
    changeLanguage()
  })
})

btnGeneratorMain.addEventListener("click", (e) => {
  e.preventDefault()
  loadGener()
})

const gymBlock = document.querySelector('.container-gym')
hrefMain.addEventListener("click", (e) => {
  e.preventDefault()
  if (createGenerator.style.display === "block") {
    createGenerator.style.display = "none"
    containerFooterGener.style.display = "none"
    main.style.display = "block"
    headerStyle.style.display = "block"
    contactsContainer.style.display = "block"
    window.location.hash = "#generator"
  }
})

export {
  myStorage,
  main,
  contactsContainer
}