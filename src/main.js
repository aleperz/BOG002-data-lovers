import { filterData /* , anotherExample */ } from "./data.js";

//Despliegue de subitems en barra lateral de filtrado
let options = document.querySelectorAll(".deploy-but");
options.forEach((item) => {
  item.addEventListener("click", () => {
    let parentDeploy = item.parentElement;
    parentDeploy.querySelector(".chosen").toggleAttribute("hidden");
  });
});

import data from "./data/rickandmorty/rickandmorty.js";

//creando UL para crear dentro las opciones de filtrado
let newUl;
let chosen = document.querySelectorAll(".chosen");
chosen.forEach((item) => {
  newUl = document.createElement("ul");
  item.append(newUl);
});

//Funcion para crear los elementos en el DOM de opciones unicas por cada categoria
let createOptions = (item, container) => {
  let newLi = document.createElement("li");
  let label = document.createElement("label");
  let textContent = document.createTextNode(item);
  let inputCheck = document.createElement("input");
  inputCheck.setAttribute("type", "checkbox");
  inputCheck.setAttribute("value", item);
  label.append(inputCheck);
  newLi.append(label);
  label.appendChild(textContent);
  container.push(newLi);
};

let category = ["gender", "status", "species"];
//Mostrando los valores unicos de genero
let uniqueCategories = [];
let categoryOptions = [];
category.forEach((item) => {
  data.results.forEach((element) => {
    categoryOptions.push(element[item]);
  });
  uniqueCategories.push(new Set(categoryOptions));
  categoryOptions = [];
});
console.log(uniqueCategories);

let containerValues = [];
uniqueCategories.forEach((item) => {
  item.forEach((subitem) => {
    createOptions(subitem, containerValues);
  });
  let categoryOption = category.shift();
  let OptionsParent = document.querySelector(
    `div#${categoryOption}Options >ul`
  );
  console.log(categoryOption);
  console.log(containerValues);
  containerValues.forEach((item) => {
    let inputOnLi = item.querySelector("input");
    inputOnLi.setAttribute("data-category", categoryOption);
    OptionsParent.append(item);
  });
  console.log(containerValues);
  containerValues = [];
});

let checkboxes = document.querySelectorAll("input");
let checkboxesArray = Array.from(checkboxes);
console.log(checkboxesArray);

//Función para que que el usuario solo pueda seleccionar un check por categoria
let categories = ["gender", "status", "species"];
categories.forEach((item) => {
  let checkboxFilter = checkboxesArray.filter((checkbox) => {
    return checkbox.dataset.category === item;
  });
  checkboxFilter.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      checkboxFilter.forEach((subitem) => {
        subitem.checked = false;
      });
      e.currentTarget.checked = true;
    });
  });
});

//Boton para aplicar los filtros selecionados por el usuario en los CHECKBOX
document.querySelector("#filterBtn").addEventListener("click", () => {
  //Extraemos los input tipo checkbox:checked
  let inputs = document.querySelectorAll("input:checked");
  console.log(...inputs);

  //De cada checkbox:checked extraemos su value()
  let conditionsContainer = []; //ex:conditionsContainer =[[gender,genderless],[status, alive],[species, alien]]
  inputs.forEach((item) => {
    let conditions = []; //ex: conditions =[gender,genderless]
    conditions.push(item.dataset.category); //ex: gender
    conditions.push(item.value); //ex:genderless
    conditionsContainer.push(conditions);
  });
  console.log(conditionsContainer);

  //Borrando lo que pudiera visualizarse de un filtro previo
  let eliminatePreElements = document.querySelectorAll(".cardChar");
  eliminatePreElements.forEach((item) => {
    item.remove();
  });

  let datos = data.results;
  showCharactersFilterOfData(datos, conditionsContainer);

  //Quitamos el check:checked a los input para el caso en que el usuario desee hacer un nuevo filtro
  inputs.forEach((item) => {
    item.checked = false;
  });
});

//Función de crear personajes a partir de: 1. la Data filtrada o la Data, 2.indicandole seccion (elemento html) donde se hara el append
let createCharacters = (filteredData, sectionToAppend) => {
  let cardsContainer = [];
  filteredData.forEach((item) => {
    let cardCharacter = document.createElement("div");
    cardCharacter.classList.add("cardChar");
    cardCharacter.setAttribute("id", item.id);
    let cardTitle = document.createElement("span");
    cardTitle.textContent = item.name;
    let cardImage = document.createElement("img");
    cardImage.src = item.image;
    cardCharacter.append(cardImage, cardTitle);
    cardsContainer.push(cardCharacter);
    cardCharacter.addEventListener("click", () => {
      let containerInfo = document.createElement("div");
      containerInfo.setAttribute("id", item.id);
      let imageInfo = document.createElement("img");
      imageInfo.src = item.image;
      let statusInfo = document.createElement("span");
      statusInfo.textContent = item.status;
      let nameInfo = document.createElement("span");
      nameInfo.textContent = item.name;
      let speciesInfo = document.createElement("span");
      speciesInfo.textContent = item.species;
      let typeInfo = document.createElement("span");
      typeInfo.textContent = item.type;
      let genderInfo = document.createElement("span");
      genderInfo.textContent = item.gender;
      let originInfo = document.createElement("span");
      originInfo.textContent = item.origin.name;
      let locationInfo = document.createElement("span");
      locationInfo.textContent = item.location.name;
      let createdInfo = document.createElement("span");
      createdInfo.textContent = item.created;
    });
  });
  sectionToAppend.append(...cardsContainer);
};

//FUNCION FILTER Y MOSTRAR PERSONAJES FILTRADOS
function showCharactersFilterOfData(data, filters) {
  //invocamos la función filter data y le pasamos por parametro todas las condiciones
  let filtarray = filterData(data, filters);
  console.log(filtarray);

  //visualizando personajes filtrados
  let filterSection = document.querySelector(".filterSection");
  if (filtarray) {
    createCharacters(filtarray, filterSection);
  }
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
