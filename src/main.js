import { example, anotherExample } from './data.js';

//Despliegue de subitems en barra lateral de filtrado
let options = document.querySelectorAll(".options_filterContainer")
options.forEach(item => {
    item.addEventListener("click", () => {
    item.querySelector('.chosen').toggleAttribute('hidden') 
    })})

//Extrayendo valor del checkbox
/* let checks = document.querySelectorAll() */

import data from './data/rickandmorty/rickandmorty.js';

/* console.log(example, anotherExample,  */

//Mostrando los valores unicos de genero    
    const gender = []    
    data.results.forEach(item =>{
    gender.push(item.gender)
});
let result = new Set(gender)
console.log([...result])

//Mostrando los valores unicos de status
const status = []    
data.results.forEach(item =>{
status.push(item.status)
});
let uniqueStatus = new Set(status)
console.log([...uniqueStatus])

//Mostrando los valores unicos de species
const species = []    
data.results.forEach(item =>{
species.push(item.species)
});
let uniqueSpecies = new Set(species)
console.log([...uniqueSpecies])

//Mostrando los valores unicos de type
const type = []    
data.results.forEach(item =>{
    type.push(item.type)
});
let uniqueType = new Set(type)
console.log([...uniqueType])

//Mostrando los valores unicos de origin
const origin = []    
data.results.forEach(item =>{
    origin.push(item.origin.name)
});
let uniqueOrigin = new Set(origin)
console.log([...uniqueOrigin])

//Mostrando los valores unicos de location
const location = []    
data.results.forEach(item =>{
    location.push(item.location.name)
});
let uniqueLocation = new Set(location)
console.log([...uniqueLocation])