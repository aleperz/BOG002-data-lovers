import { filterData, anotherExample } from './data.js';

//Despliegue de subitems en barra lateral de filtrado
let options = document.querySelectorAll(".options_filterContainer")
options.forEach(item => {
    item.addEventListener("click", () => {
    item.querySelector('.chosen').toggleAttribute('hidden')     
})})

import data from './data/rickandmorty/rickandmorty.js';

//creando opciones de filtrado 

let newUl;
let chosen = document.querySelectorAll(".chosen");
chosen.forEach(item => {
    newUl = document.createElement("ul")
    item.append(newUl)
}) 

function createOptions(item,container){
    let newLi = document.createElement("li")
    let label = document.createElement("label")
    let textContent = document.createTextNode(item);
    let inputCheck = document.createElement("input")
    inputCheck.setAttribute("type","checkbox")
    inputCheck.setAttribute("value",item)
    label.append(inputCheck)
    newLi.append(label)    
    label.appendChild(textContent)
    container.push(newLi)
}

//Mostrando los valores unicos de genero    
const gender = []    
data.results.forEach(item =>{
gender.push(item.gender)
});
let uniqueGender = new Set(gender)

let containerGender = []
let genderParent = document.querySelector("div#genderOptions > ul")
uniqueGender.forEach(item => {
    createOptions(item,containerGender)
})
genderParent.append(...containerGender);


//Mostrando los valores unicos de status
const status = []    
data.results.forEach(item =>{
status.push(item.status)
});
let uniqueStatus = new Set(status)

let containerStatus = []
let statusParent = document.querySelector("div#statusOptions > ul")
uniqueStatus.forEach(item => {
    createOptions(item, containerStatus)
})
statusParent.append(...containerStatus);


//Mostrando los valores unicos de species
const species = []    
data.results.forEach(item =>{
species.push(item.species)
});
let uniqueSpecies = new Set(species)

let containerSpecies = []
let speciesParent = document.querySelector("div#speciesOptions > ul")
uniqueSpecies.forEach(item => {
    createOptions(item, containerSpecies)
})
speciesParent.append(...containerSpecies);

//Mostrando en pantalla todos los personajes
let cardContainer = [];
let filterSection = document.querySelector(".filterSection")
data.results.forEach(item => {
    let cardCharacter = document.createElement("div")
    let  cardTitle = document.createElement("span")
    cardTitle.textContent = item.name
    let cardImage = document.createElement("img")
    cardImage.src = item.image
    cardCharacter.append(cardImage, cardTitle)
    cardContainer.push(cardCharacter)
})
filterSection.append(...cardContainer)

//Mostrando los valores unicos de episodes
/* const episodes = []    
data.results.forEach(item =>{
    let epi = []
    epi.push(item.episode)
    console.log(epi)
    epi.forEach(it => {
        episodes.push(it)
    })
    
});
let uniqueEpisodes = new Set(episodes)
    console.log(uniqueEpisodes) */


//Extrayendo valor del checkbox
/* let checks = document.querySelectorAll() */



//Mostrando los valores unicos de type
/* const type = []    
data.results.forEach(item =>{
    type.push(item.type)
});
let uniqueType = new Set(type) */



//Mostrando los valores unicos de origin
/* const origin = []    
data.results.forEach(item =>{
    origin.push(item.origin.name)
});
let uniqueOrigin = new Set(origin) */

//Mostrando los valores unicos de location
/* const location = []    
data.results.forEach(item =>{
    location.push(item.location.name)
});
let uniqueLocation = new Set(location) */






/* console.log(example, anotherExample,  */
