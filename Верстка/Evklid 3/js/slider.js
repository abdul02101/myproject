document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.tabs-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-work__consultation-LeftBlock').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })

  document.querySelectorAll('.tabs-btn').forEach(function (tabsBtnPic) {
    tabsBtnPic.addEventListener('click', function (eventPic) {
      const pic = eventPic.currentTarget.dataset.pic
      const activee = eventPic.currentTarget.dataset.activee
      document.querySelectorAll('.section-work__consultation-RightBlock-picture').forEach(function (tabContentPic) {
        tabContentPic.classList.remove('tab-content-active-pic')
      })
      document.querySelectorAll('.btn-seting').forEach(function (tabContentPic1) {
        tabContentPic1.classList.remove('active')
      })
      document.querySelector(`[data-target="${pic}"]`).classList.add('tab-content-active-pic')
      document.querySelector(`[data-target="${activee}"]`).classList.add('active')
    })
  })

  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })

  document.querySelector('#cancel').addEventListener('click', function () {
    document.querySelector('#menu').classList.remove('is-active')
  })
})








