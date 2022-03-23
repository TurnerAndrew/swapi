// const { default: axios } = require("axios")

//query selectors
const planetDiv = document.getElementById('planets')
const peopleDiv = document.getElementById('residents')

//request functions
const getPlanets = () => axios.get('https://swapi.dev/api/planets').then(res => {
    res.data.results.forEach(planet => createPlanetCard(planet))
})

const getResident = (url => {
    axios.get(url).then(res => {
        createResidentCard(res.data)
    })
})

const getResidents = (e) => {
    console.log('request')
    peopleDiv.innerHTML = ''
    axios.get(e.target.id).then(res => {
        res.data.residents.forEach(person => getResident(person))
    })
}

getPlanets()
//html creator functions


const createPlanetCard = (planet) => {
    const card = document.createElement('div')
    card.innerHTML = `
        <h1 id="${planet.name}">${planet.name}</h1>
        <h2 class='stats' id="population">Population: <span>${planet.population}</span></h2>
        <h3 class='stats' id='climate'>Climate: <span>${planet.climate}</span></h3>
        <h3 class='stats' id='day'>Planetary Day Length: <span>${planet.rotation_period} hours</span></h3>
        <h3 class='stats' id='year'>Planetary Year Length: <span>${planet.orbital_period} Planetary Days</span></h3>
        <button class='button' id='${planet.url}'>Get Residents</button>
    `
    const btn = document.querySelector('.button')
    console.log(btn)
    // btn.addEventListener('click', getResidents)
   
    planetDiv.appendChild(card)
}

const createResidentCard = (person) => {
    const card = document.createElement('div')
    console.log(person)
    card.innerHTML = `
        <h1 id='person-name'>${person.name}</h1>
    `
    peopleDiv.appendChild(card)
}