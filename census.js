const VOTERS_ID = [...Array(27).keys()]

let VOTERS_IDENTIFICATION = [
  '04-0783-001596',  // 'BARROSO, ALEXANDER',
  '08-0914-000572',  // 'BATISTA, AILENIS',
  '08-0914-000587',  // 'BATISTA, JOHEL',
  '08-0898-001521',  // 'CABALLERO, JOSE',
  '08-0903-002297',  // 'CEDENO, ERIC',
  '08-0905-001511',  // 'CHEUNG, MIGUEL',
  '04-0787-001380',  // 'DOMINGUEZ, EDWIN',
  '08-0917-001537',  // 'ESPINOSA, RAUL',
  '08-0904-000167',  // 'FERNANDEZ, MADELAINE',
  '08-0898-002447',  // 'LASSO, HECTOR',
  '08-0879-001679',  // 'LOGREIRA, MEDARDO',
  '08-0896-001497',  // 'MARTINEZ, DIANA',
  '08-0909-001817',  // 'MEDINA, LEONARDO',
  '08-0913-000673',  // 'MEDINA, RAFAEL',
  '08-0898-000850',  // 'MENDOZA, EVELYN',
  '02-0733-002271',  // 'NUNEZ, CESAR',
  '08-0912-000328',  // 'OSORIO, ESTRELLA',
  '08-0896-001941',  // 'PALACIOS, ERIC',
  '08-0921-000699',  // 'PATEL, KAROLINA',
  '08-0900-001376',  // 'ROSALES, RICARDO',
  '08-0918-000262',  // 'SAAVEDRA, YISEIKA',
  '0N-0021-002085',  // 'SARABIA, ALEJANDRO',
  '08-0899-002469',  // 'TEJADA, ROY',
  '08-0913-001085',  // 'VALDES, AGUSTIN',
  '08-0902-000437',  // 'VARGAS, JUAN',
  '08-0876-001699',  // 'VILLARREAL, LUIS',
  '08-0879-001495',  // 'ZAMORA, HECTOR',
]

let VOTERS_NAME = [
  'BARROSO, ALEXANDER',
  'BATISTA, AILENIS',
  'BATISTA, JOHEL',
  'CABALLERO, JOSE',
  'CEDENO, ERIC',
  'CHEUNG, MIGUEL',
  'DOMINGUEZ, EDWIN',
  'ESPINOSA, RAUL',
  'FERNANDEZ, MADELAINE',
  'LASSO, HECTOR',
  'LOGREIRA, MEDARDO',
  'MARTINEZ, DIANA',
  'MEDINA, LEONARDO',
  'MEDINA, RAFAEL',
  'MENDOZA, EVELYN',
  'NUNEZ, CESAR',
  'OSORIO, ESTRELLA',
  'PALACIOS, ERIC',
  'PATEL, KAROLINA',
  'ROSALES, RICARDO',
  'SAAVEDRA, YISEIKA',
  'SARABIA, ALEJANDRO',
  'TEJADA, ROY',
  'VALDES, AGUSTIN',
  'VARGAS, JUAN',
  'VILLARREAL, LUIS',
  'ZAMORA, HECTOR',
]

const CANDIDATES = [
  'grupo #1',
  'grupo #2',
  'grupo #3',
  'grupo #4',
  'grupo #5',
  'grupo #6',
  'grupo #7',
  'grupo #8',
  'grupo #9',
]

function getVoters(web3){
    return {
        VOTERS_ID,
        VOTERS_IDENTIFICATION: VOTERS_IDENTIFICATION.map((el) => web3.utils.utf8ToHex(el) ),
        VOTERS_NAME: VOTERS_NAME.map((el) => web3.utils.utf8ToHex(el) ),
    }
}

function getCandidates(web3){
  return {
    CANDIDATES: CANDIDATES.map((el) => web3.utils.utf8ToHex(el) ),
  }
}

module.exports = { getVoters, getCandidates };