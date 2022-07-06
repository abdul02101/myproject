function arrowRoat(ev) {
  const classRemove = document.querySelectorAll('.thead-th-reverse')
  classRemove.forEach(el => {
    if(el === ev) return;
    el.classList.remove('thead-th-reverse')
  })
}

export {arrowRoat}
