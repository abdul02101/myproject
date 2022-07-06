
document.addEventListener('DOMContentLoaded', () => {
  let chet = 1;
  function frout() {
    chet++;

    if (chet>3) {chet=0;}

    switch(chet) {
      case 1:
        document.getElementById('img').style.backgroundImage = "url('../img/birmingham-museums-1.png')";
        break;
      case 2:
        document.getElementById('img').style.backgroundImage = "url('../img/birmingham-museums-2.png')";
        break;
      case 3:
        document.getElementById('img').style.backgroundImage = "url('../img/birmingham-museums-3.png')";
        break;
    }

    setTimeout(frout, 5000);
  }
  window.onload = function () { setTimeout(frout, 5000); }


  const btnEvent = document.getElementById('all-event-btn');
  let button = ".editions-checkbox__header";
  let labels = ".editions-checkbox__item";
  let labelsList = ".editions-checkbox";
  let labelsListActive = "checklist-active";
  let labelActive = "checkbox--label-active";
  let animationClass = "animation-test";
  let inputCheckbox = ".item__checks";

  function checkboxToggle(a, b, c, labelsListActive, labelActive, animationClass, inputCheckbox) {
    let btn = document.querySelector(a);
    let labels = document.querySelectorAll(b);
    let listLabels = document.querySelector(c);
    let headerSpan = document.querySelector(".header-icon");
    

    
    btn.addEventListener("click", toggleSpoiler);
    btn.addEventListener("click", () => {
      
      headerSpan.classList.toggle("header-icon-active")
    });
    btn.addEventListener("keyup", function(e) {
      console.log(e.key);
      if (e.code === "Enter") {
        toggleSpoiler();
      }
    })    

  function toggleSpoiler() {
      if (!listLabels.classList.contains(labelsListActive)) {
      listLabels.classList.add(labelsListActive);
      labels.forEach(item => {
        // item.classList.add("checkbox--label-active");
        animationItem(item, labelActive, animationClass, "add");
      })
    } else {
      listLabels.classList.remove(labelsListActive);
      labels.forEach(item => {
        if (item.querySelector(inputCheckbox).checked) {
        animationItem(item, labelActive, animationClass, "add");
        } else {
          animationItem(item, labelActive, animationClass, "remove");
        }
        });
    }
    labels.forEach(item => {
      item.addEventListener("click", function() {
        console.log('+')
        if (!listLabels.classList.contains(labelsListActive)) {
          animationItem(this, labelActive, animationClass, "remove");
        }
      });
    })

    // labels.forEach(item => {
    //   item.addEventListener("click", () => {
    //     let cancelLabel = item.querySelector('.item__cancel-btn')
    //     console.log(cancelLabel)
    //     if(cancelLabel.classList.contains('item__cancel-btn-active')){
    //       cancelLabel.classList.toggle('item__cancel-btn-active')
    //     }
    //     console.log(cancelLabel.classList.contains('item__cancel-btn-active'))
    //   }, true)
    // })
  }
  
  function animationItem(item, class1, class2, f) {
    if (f === "add") {
      item.classList.add(class1);
    setTimeout(function() {
      item.classList.add(class2)
    }, 100);
  
    } else {
        item.classList.remove(class2);
    setTimeout(function() {
      item.classList.remove(class1)
    }, 300);
    }
    
  }
  
  }
  
  checkboxToggle(button, labels, labelsList, labelsListActive, labelActive, animationClass, inputCheckbox);
  
  btnEvent.addEventListener('click', () => {
    const list = document.querySelector('.section-event__list-event');
    const blockBtn = document.querySelector('.section-event__all-event');
    list.style.flexWrap = 'wrap';
    blockBtn.style.display = 'none';
    
    document.querySelectorAll('.list-event__child').forEach(listItem => {
      listItem.style.display = 'flex';
    })
  });




  document.querySelectorAll('.child__link').forEach(function (tabsBtn) {
    
    tabsBtn.addEventListener('click', function () {
      let dropdown = this.parentElement.querySelector(".child__select");
      let arrow = this.parentElement.querySelector(".link-svg");
      document.querySelectorAll('.child__select').forEach(function (el) {
        if (el != dropdown){
          el.classList.remove('is-active');
        }
      })
      document.querySelectorAll('.link-svg').forEach(function (ell) {
        if (ell != arrow){
          ell.classList.remove('link-rotate');
        }
      })
      dropdown.classList.toggle('is-active') 
      arrow.classList.toggle('link-rotate')
    })
  })

  document.querySelectorAll('.header__burger').forEach(clickBurger => {
    clickBurger.addEventListener('click', () => {
      document.querySelectorAll('.header__nav').forEach(el => {
        el.classList.add('is-active-nav');
      })
    })
  })

  document.querySelectorAll('.nav__cancel').forEach(clickCancel => {
    clickCancel.addEventListener('click', () => {
      document.querySelectorAll('.header__nav').forEach(el => {
        el.classList.remove('is-active-nav');
      })
    })
  })




  document.querySelectorAll('.trans-block__serch').forEach(function (tabsBtn) {
    
    tabsBtn.addEventListener('click', function () {
      let borderColor = this.parentElement.querySelector(".serch__text");

      document.querySelectorAll('.serch__text').forEach(function (el) {
        if (el != borderColor){
          el.classList.remove('search-border');
        }
      })
      borderColor.classList.toggle('search-border') 
    })
  })

  document.addEventListener("click", function(e) {
    let target = e.target;
    let borderTarget = e.target
    if (!target.closest(".trans-block__menu")) {
      document.querySelectorAll(".child__select").forEach(el => {
          el.classList.remove("is-active");
      })   
      document.querySelectorAll(".link-svg").forEach(el => {
        el.classList.remove("link-rotate");
      })
    }
    if (!borderTarget.closest(".trans-block__serch")) {
      document.querySelectorAll(".serch__text").forEach(el => {
          el.classList.remove("search-border");
      }) 
    }
  })
  const headerContainer = document.querySelector('.header__container');
  const logoHeader = headerContainer.querySelector('.header__logo');
  const burgerHeader = headerContainer.querySelector('.header__burger');
  const groupForSearch = headerContainer.querySelector('.group-search');
  const searchBtn = groupForSearch.querySelector('.header__search');
  const inputSearch = groupForSearch.querySelector('.serch__text');
  const canselSearch = groupForSearch.querySelector('.header-serch__cancel');
  
  

  searchBtn.querySelector('.search__svg-header').addEventListener('click', () => {
    if(inputSearch.classList.contains('search-is-active')){
      inputSearch.classList.remove('search-is-active');
    }else{
      inputSearch.classList.add('search-is-active');
    }

    if(inputSearch.classList.contains('search-is-active')){
      searchBtn.querySelector('.search__svg-header').style.marginRight = '9px'
    }else{
      searchBtn.querySelector('.search__svg-header').style.marginRight = '0px'
    }

    if(window.innerWidth < 769){

      if(inputSearch.classList.contains('search-is-active')){
        logoHeader.classList.add('dis-active');
        burgerHeader.classList.add('dis-active');
        canselSearch.classList.add('is-active');
        groupForSearch.style.width = '100%';
      }else{
        logoHeader.classList.remove('dis-active');
        burgerHeader.classList.remove('dis-active');
        canselSearch.classList.remove('is-active');
        groupForSearch.style.width = '28%';
      }
      canselSearch.addEventListener('click', () => {
        logoHeader.classList.remove('dis-active');
        burgerHeader.classList.remove('dis-active');
        canselSearch.classList.remove('is-active');
        inputSearch.classList.remove('search-is-active');

        groupForSearch.style.width = '28%';

      })
      
    }

    if(window.innerWidth < 501){
      searchBtn.querySelector('.search__svg-header').style.marginRight = '0px'

      if(inputSearch.classList.contains('search-is-active')){
        logoHeader.classList.add('dis-active');
        burgerHeader.classList.add('dis-active');
        canselSearch.classList.add('is-active');
        groupForSearch.style.width = '100%';
        headerContainer.style.minHeight = '75px';
        groupForSearch.style.height = '44px';
        groupForSearch.style.paddingBottom = '4px';
        groupForSearch.style.justifyContent = 'center';
        groupForSearch.style.paddingLeft = '40px';
        
      }else{
        logoHeader.classList.remove('dis-active');
        burgerHeader.classList.remove('dis-active');
        canselSearch.classList.remove('is-active');
        groupForSearch.style.width = '28%';
        groupForSearch.style.height = 'auto';
        groupForSearch.style.paddingBottom = '0';
        headerContainer.style.minHeight = '45px';
        groupForSearch.style.justifyContent = 'flex-end';
        groupForSearch.style.paddingLeft = '0';
      }

      canselSearch.addEventListener('click', () => {
        logoHeader.classList.remove('dis-active');
        burgerHeader.classList.remove('dis-active');
        canselSearch.classList.remove('is-active');
        inputSearch.classList.remove('search-is-active');

        groupForSearch.style.width = '28%';
        groupForSearch.style.height = 'auto';
        groupForSearch.style.paddingBottom = '0';
        groupForSearch.style.justifyContent = 'flex-end';
        groupForSearch.style.paddingLeft = '0';
        headerContainer.style.minHeight = '45px';
        

      })
      
    }
  })
    

  
  let gallerySlider = new Swiper(".swiper-right--content", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 2
    },
    // spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination--right",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-btn--next",
      prevEl: ".swiper-btn--prev"
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        grid: {
          rows: 1
        },
        spaceBetween: 0
      },
      501: {
        slidesPerView: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 30
      },

      1200: {
        slidesPerView: 3,
        grid: {
          rows: 2
        },
        spaceBetween: 50
      }
    },

    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий',
    }
  });

  const swiperEvent = new Swiper('.swiper-event', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
  });

  
  const swiperEdition = new Swiper('.swiper-editions', {
    
    pagination: {
      el: ".swiper-pagination--right",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-btn--next",
      prevEl: ".swiper-btn--prev"
    },

    breakpoints:{
      1150:{
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 51,
      },

      769:{
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 51,
      },

      500:{
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 5,
      },

    },

  });

  const swiperProject = new Swiper('.swiper-project', {
    navigation: {
      nextEl: ".swiper-btn--next",
      prevEl: ".swiper-btn--prev"
    },

    breakpoints:{
      1150:{
        slidesPerView: 3,
        slidesPerGroup: 4,
        spaceBetween: 50,
      },

      769:{
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 51,
      },

      501:{
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 39,
      },
      320:{
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },

    },
  });

  const element = document.querySelector('select');

  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
  });

  new SimpleBar(document.getElementById('myElement'), {
    autoHide: false,
    forceVisible: false
  });
  new SimpleBar(document.getElementById('myElement2'), {
    autoHide: false,
    forceVisible: false
  });
  new SimpleBar(document.getElementById('myElement3'), {
    autoHide: false,
    forceVisible: false
  });
  new SimpleBar(document.getElementById('myElement4'), {
    autoHide: false,
    forceVisible: false
  });
  new SimpleBar(document.getElementById('myElement5'), {
    autoHide: false,
    forceVisible: false
  });

  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      heightStyle: "content"
    });
  } );

  tippy('#myTippy-1', {
    content: 'Пример современных тенденций - современная методология разработки',
    interactiveBorder: 0
  });
  tippy('#myTippy-2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    interactiveBorder: 0
  });
  tippy('#myTippy-3', {
    content: 'В стремлении повысить качество',
    interactiveBorder: 0
  });

  ymaps.ready(init);

  function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
          center: [55.7584541625397, 37.601064815866714],
          zoom: 14
      });

      var myPlacemark = new ymaps.Placemark([55.7584541625397, 37.601064815866714],{},{
        iconLayout: 'default#image',
        iconImageHref: 'img/Ellipse-12.png',
        iconImageSize: [20,20],
        iconImageOffset: [-3,-42]
      });


    myMap.geoObjects.add(myPlacemark);
  }
  

})