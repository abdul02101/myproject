function dateTimeFormat(value) {
  let dataTime = value.split('T')
  let data = dataTime[0].split('-').reverse().join('.')
  let time = dataTime[1].substr(0, 5)

  return `${data} ${time}`
}


export { dateTimeFormat }


