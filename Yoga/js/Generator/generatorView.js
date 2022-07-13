const myStorage = window.localStorage

function containerGym() {
  const container = document.createElement('div');
  container.classList.add('container-gym');
  
  return container;
}

function btnBack() {
  const btnBack = document.createElement('button')
  btnBack.classList.add('btn-back')
  btnBack.innerHTML = `<svg class="svg-back" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title></title><g data-name="Layer 2" id="Layer_2"><path d="M20,25a1,1,0,0,1-.71-.29l-8-8a1,1,0,0,1,0-1.42l8-8a1,1,0,1,1,1.42,1.42L13.41,16l7.3,7.29a1,1,0,0,1,0,1.42A1,1,0,0,1,20,25Z"></path></g><g id="frame"><rect class="cls-1" height="32" width="32"></rect></g></svg>`
  
  return btnBack
}

function createList(title) {
  const list = document.createElement('ul');
  list.classList.add('world-class');
  
  const header = document.createElement('h1');
  header.classList.add('header-gener');
  header.textContent = title[myStorage["lang"]];
  document.querySelector('.container-gym').append(header)
  
  return list;
}

function swiper(srcImg, srcVideo) {
  const swiper = document.createElement('div')
  swiper.classList.add('swiper-gener')
  
  const swiperWrapper = document.createElement('div')
  swiperWrapper.classList.add('swiper-wrapper', 'swiper-wrapper-gener')
  swiper.append(swiperWrapper)
  if (srcVideo) {
    const swiperSlide = document.createElement('div')
    swiperSlide.classList.add('swiper-slide')
    swiperSlide.innerHTML = `
                              <video class="video-generator" controls="controls" playsinline>
                                <source src="${srcVideo}">
                              </video>
                            `
    swiperWrapper.append(swiperSlide)
  } else {
    for (let i = 0; i < srcImg.length; ++i) {
      const swiperSlide = document.createElement('div')
      
      swiperSlide.classList.add('swiper-slide')
      swiperSlide.innerHTML = `
                                <img class="icon-img-open" src="${srcImg[i]}">
                              `
      swiperWrapper.append(swiperSlide)
    }
  }
  
  const blockPrevNext = document.createElement('div');
  blockPrevNext.classList.add('block-prev-next')
  
  const btnNext = document.createElement('button');
  btnNext.classList.add('swiper-button-next-gener')
  
  const btnPrev = document.createElement('button');
  btnPrev.classList.add('swiper-button-prev-gener')
  btnNext.innerHTML = '<svg class="project-btn-svg-right" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 -1.01779e-06 15 -6.55671e-07C6.71573 -2.93554e-07 2.93554e-07 6.71573 6.55671e-07 15C1.01779e-06 23.2843 6.71573 30 15 30Z" fill="#ECECEC"/><path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 -1.01779e-06 15 -6.55671e-07C6.71573 -2.93554e-07 2.93554e-07 6.71573 6.55671e-07 15C1.01779e-06 23.2843 6.71573 30 15 30Z" stroke="black"/><path d="M14 20L19 15L14 10" stroke="black"/></svg>'
  btnPrev.innerHTML = '<svg class="project-btn-svg-left" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 30C6.71573 30 8.89561e-07 23.2843 1.25168e-06 15C1.61379e-06 6.71573 6.71573 -1.01779e-06 15 -6.55671e-07C23.2843 -2.93554e-07 30 6.71573 30 15C30 23.2843 23.2843 30 15 30Z" fill="#ECECEC"/><path d="M15 30C6.71573 30 8.89561e-07 23.2843 1.25168e-06 15C1.61379e-06 6.71573 6.71573 -1.01779e-06 15 -6.55671e-07C23.2843 -2.93554e-07 30 6.71573 30 15C30 23.2843 23.2843 30 15 30Z" stroke="black"/><path d="M16 20L11 15L16 10" stroke="black"/></svg>'
  
  blockPrevNext.append(btnPrev, btnNext)

  return {
    swiper,
    blockPrevNext
  }
}

function popUp(arrImg, textGymDiscr, video, headerDiscrip) {
  const swiperGener = swiper(arrImg, video)

  const bPopUp = document.createElement('div')
  bPopUp.classList.add('b-popup')

  const bPopContent = document.createElement('div');
  bPopContent.classList.add('b-popup-content')

  const btnCancel = document.createElement('btn');
  const svgCancel = '<svg class="svg-cancel" width="40" height="40" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.09082" width="29.5699" height="2.95699" transform="rotate(45 2.09082 0)" fill="#333333"/><rect y="20.9092" width="29.5699" height="2.95699" transform="rotate(-45 0 20.9092)" fill="#333333"/></svg>';
  btnCancel.classList.add('btn-cancel-photo')
  btnCancel.innerHTML = svgCancel

  bPopUp.style.display = 'flex'
  document.querySelector('.body').append(bPopUp)
  bPopUp.append(bPopContent, btnCancel)

  btnCancel.addEventListener('click', (e) => {
    document.querySelector('.body').removeChild(bPopUp)
  })

  const swiperContainer = document.createElement('div')
  swiperContainer.append(swiperGener.swiper)

  const headerDiscripGym = document.createElement('h2')
  headerDiscripGym.classList.add('header-world')
  headerDiscripGym.textContent = headerDiscrip[myStorage["lang"]]

  const discripGym = document.createElement('p')
  discripGym.classList.add('text-world')
  discripGym.innerHTML = textGymDiscr[myStorage["lang"]]

  bPopContent.append(swiperContainer, swiperGener.blockPrevNext, headerDiscripGym, discripGym)

  const swiperLoad = new Swiper('.swiper-gener', {
    navigation: {
      nextEl: ".swiper-button-next-gener",
      prevEl: ".swiper-button-prev-gener"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
    },
  });

  return bPopUp;
}

function createItem(arrImgSrc, textGym, nameGym, videoSrc, headerDiscripGym) {
  const item = document.createElement('li')
  const img = document.createElement('img')
  const name = document.createElement('p')

  item.classList.add('child-world');

  name.classList.add('header-name-upr')
  name.textContent = nameGym;

  item.append(img, name)

  img.classList.add('icon-img');
  img.setAttribute('src', arrImgSrc[0]);

  item.addEventListener('click', () => {
    popUp(arrImgSrc, textGym, videoSrc, headerDiscripGym)
  })

  return item
}

export {
  createList,
  createItem,
  containerGym,
  btnBack
}