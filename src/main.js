import { filterData/* , anotherExample */ } from './data.js';

//Despliegue de subitems en barra lateral de filtrado
let options = document.querySelectorAll(".deploy-but")
options.forEach(item => {
    item.addEventListener("click", () => {
    let parentDeploy = item.parentElement
    parentDeploy.querySelector('.chosen').toggleAttribute('hidden')     
})})


import data from './data/rickandmorty/rickandmorty.js';

//creando UL para crear dentro las opciones de filtrado 
let newUl;
let chosen = document.querySelectorAll(".chosen");
chosen.forEach(item => {
    newUl = document.createElement("ul")
    item.append(newUl)
}) 

//Funcion para crear los elementos en el DOM de opciones unicas por cada categoria
let createOptions = (category, item,container)=>{
    let newLi = document.createElement("li")
    let label = document.createElement("label")
    let textContent = document.createTextNode(item);
    let inputCheck = document.createElement("input")
    inputCheck.setAttribute("type","checkbox")
    inputCheck.setAttribute("value", `${category},${item}`)
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
    createOptions("gender",item,containerGender)
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
    createOptions("status", item, containerStatus)
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
    createOptions("species", item, containerSpecies)
})
speciesParent.append(...containerSpecies);

//Mostrando en pantalla todos los personajes
/* 
let filterSection = document.querySelector(".filterSection")
createCharacters(data.results,filterSection) */


//Boton para aplicar los filtros selecionados de los CHECKBOX por el usuario
document.querySelector("#btn").addEventListener("click",() =>{
    let inputs = document.querySelectorAll('input:checked')
    console.log(...inputs)   
    getCharactersFilterOfData(data,inputs)
})

 //Función de crear personajes a partir de: 1. la Data filtrada o la Data, 2.indicandole seccion (elemento html) donde se hara el append
let createCharacters = (filteredData,sectionToAppend) =>{
    let cardsContainer = []
    filteredData.forEach(item => {        
        let cardCharacter = document.createElement("div")
        cardCharacter.setAttribute("id",item.id)
        let  cardTitle = document.createElement("span")
        cardTitle.textContent = item.name
        let cardImage = document.createElement("img")
        cardImage.src = item.image
        cardCharacter.append(cardImage, cardTitle)
        cardsContainer.push(cardCharacter)
        cardCharacter.addEventListener("click", ()=>{
            let containerInfo = document.createElement("div")
            containerInfo.setAttribute('id',item.id)
            
        })
    })
    sectionToAppend.append(...cardsContainer)
}

//FUNCION FILTER Y MOSTRAR PERSONAJES FILTRADOS
function getCharactersFilterOfData(data, filter){       

    //invocamos la función filter data y le pasamos por parametro todas las condiciones 
    let filtarray = filterData(data,filter)
    console.log(filtarray)             

     //visualizando personajes filtrados
    let filterSection = document.querySelector(".filterSection")
    createCharacters(filtarray,filterSection)
}



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


/* console.log(example, anotherExample,  */
