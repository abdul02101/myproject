document.addEventListener("DOMContentLoaded", () =>{
    const btnBurger = document.querySelector(".header-burger-menu");
    const btnCancel = document.querySelector(".btn-cancel");
    const menuSlide = document.querySelector(".menu-slide");

    btnBurger.addEventListener("click", () => {
      menuSlide.style.display = 'flex'
    })
    btnCancel.addEventListener("click", () => {
      menuSlide.style.display = 'none'
    })

    const swiper = new Swiper('.swiper', {
      grabCursor: true,
      slidesPerView: 1,
      loop: true,
      autoplay: {
          delay: 2000,
      },

      breakpoints: {
        790: {
            slidesPerView: 2,
        }
      }
    
    });

    $( function() {
        $( "#accordion" ).accordion({
        collapsible: true,
        heightStyle: "content"
        });
    });
    
})