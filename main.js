const infodata = document.querySelectorAll('.estatistica-valor')
const control = document.querySelectorAll('.controle')

for (let i = 0; i < control.length; i++) {
  control[i].addEventListener('click', event => {
    const valor = control[i].children[1]
    const option = control[i].classList[1]

    if (event.target.textContent === '+') {
      valor.value = parseInt(valor.value) + 1
      const statisticsOption = statistics[option]
     
      for(let i = 0; i < infodata.length; i++){
        const currentStatistics = Number(infodata[i].children[0].innerHTML)
        const addStatistics = statisticsOption[infodata[i].classList[1]]
        infodata[i].children[0].innerHTML= currentStatistics + addStatistics
      }
    }
    if (event.target.textContent === '-') {
      valor.value = parseInt(valor.value) - 1
      const statisticsOption = statistics[option]
     
      for(let i = 0; i < infodata.length; i++){
        const currentStatistics = Number(infodata[i].children[0].innerHTML)
        const addStatistics = statisticsOption[infodata[i].classList[1]]
        infodata[i].children[0].innerHTML= currentStatistics - addStatistics
      }
    }
  })
}
//console.log(infodata.length);

const statistics = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}


