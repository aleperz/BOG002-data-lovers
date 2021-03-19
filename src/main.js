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

function createOptions(category, item,container){
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
/* let cardContainer = [];
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
filterSection.append(...cardContainer) */

//Boton filtrar
document.querySelector("#btn").addEventListener("click",() =>{
    getInputsChecks()
})

//FUNCION FILTER Y MOSTRAR PERSONAJES FILTRADOS
function getInputsChecks(){
let inputs = document.querySelectorAll('input:checked')
console.log(...inputs)

let arraysFiltrados = []
inputs.forEach(item => {
            let condicion = []
            condicion.push(item.value) 
            console.log(condicion)
            condicion.forEach(value =>{
            let filtrodeCondicion = []   
            filtrodeCondicion = filterData(data,value)
            console.log(filtrodeCondicion)
            arraysFiltrados.push(filtrodeCondicion) 
            })      } )  
            console.log(arraysFiltrados)  
        
            let firstArray= []
            let filtarray =[]
            if(arraysFiltrados.length > 1){
                    firstArray = arraysFiltrados[0]
                    console.log(firstArray)
            for(let i = 1; i < arraysFiltrados.length;i++){  
                //en la 1a iter. se concat el primer array con el segundo               
                let arrayConcat = firstArray.concat(arraysFiltrados[i])
                //se reinicializa array para que que queden solo los nuevos valores filtrados
                filtarray = [] 
                console.log(arrayConcat)
                //Se evaluan los id de los elementos de los arrays concatenados para extrar los elementos repetidos
                for(let j = 0; j < arrayConcat.length;j++){
                    for(let l = j+1; l < arrayConcat.length;l++){
                        if(arrayConcat[j].id == arrayConcat[l].id){
                            filtarray.push(arrayConcat[l])
                            
                        }
                    } 
                }
                console.log(filtarray)
                firstArray = filtarray    
                }                                 
            }
            else{
                firstArray = arraysFiltrados
            }  

    console.log(firstArray)
    //visualizando personajes filtrados
    let cardContainer = []
    let filterSection = document.querySelector(".filterSection")
    filtarray.forEach(item => {
    let cardCharacter = document.createElement("div")
    let  cardTitle = document.createElement("span")
    cardTitle.textContent = item.name
    let cardImage = document.createElement("img")
    cardImage.src = item.image
    cardCharacter.append(cardImage, cardTitle)
    cardContainer.push(cardCharacter)
})
filterSection.append(...cardContainer)
}

//FUNCION FILTRO DEL FILTRO

/* let filtro2 = filterData(filtroprueba, condicion)
let condicion2 = event.target.value 
if(condicion2 === condicion) */

//FUNCION DE FILTRADO
/* let filtroprueba = filterData(data,"Female")
console.log(filtroprueba) ; */

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
