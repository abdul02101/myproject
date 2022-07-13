import {myStorage, main, contactsContainer} from "../main.js"
  import {langArr} from "../Data/dataLang.js"

  const articles = document.querySelector(".articles")
  const headerContainer = document.querySelector(".container-header")
  const headerArticeles = document.querySelector(".container-header-articles")
  const containerFooter = document.querySelector(".container-footer")
  const contArtic = document.querySelector(".container-articles")
  const menuSlide = document.querySelector(".menu-slide")
  const linkArtickle = document.querySelectorAll(".child-list-blog")
  const btnBackArticle = document.querySelector(".articles-btn-back")
  const headerArticle = document.querySelector(".container-header-articles")
  const arrHach = ["/originated-1", "/keys-gymnastics-2", "/positive-effects-3", "/muscles-work-4", "/illness-5", "/tummy-6", "/vitals-7", "/joys-8", "/crises-9", ]

  for (let i of arrHach) {
    if (window.location.hash.includes(i) && articles.style.display === "none") {
      let hashId = i.substring(i.length - 1)
      loadArticles(myStorage["lang"], hashId)
    }
  }
  
  function loadArticles(lang, id) {
    headerArticeles.style.display = "flex"
    articles.style.display = "block"
    containerFooter.style.display = "block"
    main.style.display = "none"
    headerContainer.style.display = "none"
    contactsContainer.style.display = "none"
    menuSlide.style.display = ''
    window.scrollTo(0, 0)

    for (let key of langArr["articles-text"]) {
      if (key["id"] === id) {
        headerArticeles.style.backgroundImage = key.image
        headerArticeles.style.backgroundPosition = key.imagePosition
        headerArticeles.innerHTML = key["header"][lang]
        contArtic.innerHTML = key[lang]
        window.location.hash = window.location.pathname + `${key.locationHash}`
      }
    }
  }

  linkArtickle.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault()
      let articleId = el.dataset.artic
      loadArticles(myStorage["lang"], articleId)
    })
  })
  
  btnBackArticle.addEventListener("click", (e) => {
    e.preventDefault()
    if (articles.style.display === "block") {
      articles.style.display = "none"
      contArtic.innerHTML = ""
      headerArticle.style.display = "none"
      headerArticle.innerHTML = ""
      containerFooter.style.display = "none"
      main.style.display = "block"
      headerContainer.style.display = "flex"
      contactsContainer.style.display = "block"
      window.location.hash = "#stat"
    }
  })