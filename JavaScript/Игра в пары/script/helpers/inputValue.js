function inputChange(input){
  input.addEventListener('keypress', (event) => {
    if ( Number(event.key) % 2 !== 0 ) return event.preventDefault();
    input.addEventListener('input', (eventInput) => {
      if (eventInput.target.value < 2 || eventInput.target.value > 10 ) return eventInput.target.value = eventInput.target.value.substr(0, 1);
    })
  })


}

export { inputChange }




