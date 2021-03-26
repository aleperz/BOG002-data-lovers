import { filterData, sortData } from "./data.js";

//Redireccion al section de filtrado de personajes

const characterNavBar = document.querySelector("#characters");
characterNavBar.addEventListener("click", () => {
  const home = document.querySelector("#home");
  const charactersSection = document.querySelector("#characterSection");
  home.classList.add("ocultar");
  charactersSection.classList.add("ocultar");

  //Mostramos todos los personajes
  let filterSection = document.querySelector(".filterSection");
  let datos = data.results;
  createCharacters(datos, filterSection);
});

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
//Extrayendo opciones unicas por cada categoria con new Set
let uniqueCategories = [];
let categoryOptions = [];
category.forEach((item) => {
  data.results.forEach((element) => {
    categoryOptions.push(element[item]);
  });
  uniqueCategories.push(new Set(categoryOptions));
  categoryOptions = [];
});

let containerValues = [];
uniqueCategories.forEach((item) => {
  item.forEach((subitem) => {
    createOptions(subitem, containerValues);
  });
  let categoryOption = category.shift();
  let OptionsParent = document.querySelector(
    `div#${categoryOption}Options >ul`
  );

  //Le seteamos el atributo dataset para su categoria
  containerValues.forEach((item) => {
    let inputOnLi = item.querySelector("input");
    inputOnLi.setAttribute("data-category", categoryOption);
    //le damos append sobre su seccion padre
    OptionsParent.append(item);
  });
  containerValues = [];
});

const checkboxes = document.querySelectorAll("input");
let checkboxesArray = Array.from(checkboxes);

//El usuario solo podra seleccionar un checkbox por categoria
let categories = ["gender", "status", "species"];

//agrupamos todos los checkbox que sean de la misma categoria
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

//Aplicar los filtros selecionados por el usuario al evento de change CHECKBOX
let conditionsContainer = []; //ex:conditionsContainer = 1it:[[gender,genderless]]||2it:[[status,alive]||3it:[species,alien]]4it:[status,alive]
checkboxes.forEach((item) => {
  item.addEventListener("change", () => {
    //Del checkbox change extraemos su data-category y value()
    let conditions = []; //ex: conditions =[gender,genderless]
    conditions.push(item.dataset.category); //ex: gender
    conditions.push(item.value); //ex:genderless

    let equalCheckboxSelected = conditionsContainer.find((element) =>
      element.every(function (v, i) {
        return v === conditions[i];
      })
    );

    let previousCategorySelected = conditionsContainer.find(
      (element) => element[0] === item.dataset.category
    );
    if (equalCheckboxSelected) {
      item.checked = false;
      let indexOfElement = conditionsContainer.indexOf(equalCheckboxSelected);
      conditionsContainer.splice(indexOfElement, 1);
    } else if (previousCategorySelected) {
      //Valida si de esa misma categoria se hizo un filtro previo y lo elimina del container de condiciones para que filterData no nos devuelva un array vacio al final
      let indice = conditionsContainer.indexOf(previousCategorySelected);
      conditionsContainer.splice(indice, 1);
      conditionsContainer.push(conditions);
    } else {
      conditionsContainer.push(conditions);
    }

    //Borrando lo que pudiera visualizarse de un filtro previo
    let eliminatePreElements = document.querySelectorAll(".cardChar");
    eliminatePreElements.forEach((item) => {
      item.remove();
    });

    //Invocamos la funcion para filtrar y mostrar en pantalla los personajes filtrados
    let datos = data.results;
    showCharactersFilterOfData(datos, conditionsContainer);

    conditions = [];
  });
});

//Boton para borrar todos los filtros aplicados previamente
document.querySelector("#deleteFilterBtn").addEventListener("click", () => {
  const selectInputs = document.querySelectorAll("input:checked");
  selectInputs.forEach((input) => (input.checked = false));

  //Limpiamos el container de condiciones
  conditionsContainer = [];

  //Eliminando las tarjetas de filtros anteriores
  let eliminatePreElements = document.querySelectorAll(".cardChar");
  eliminatePreElements.forEach((item) => {
    item.remove();
  });

  //Mostramos todos los personajes
  let filterSection = document.querySelector(".filterSection");
  let datos = data.results;
  createCharacters(datos, filterSection);
});

//Función de crear personajes a partir de: 1. La Data filtrada, 2.indicandole seccion (elemento html) donde se hara el append
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
      containerInfo.classList.add("containerInfo");
      let imageInfo = document.createElement("img");
      imageInfo.src = item.image;
      let statusInfo = document.createElement("span");
      statusInfo.innerHTML = `Status: ${item.status}`;
      let nameInfo = document.createElement("span");
      nameInfo.textContent = `Name: ${item.name}`;
      let speciesInfo = document.createElement("span");
      speciesInfo.textContent = `Specie:  ${item.species}`;
      let typeInfo = document.createElement("span");
      typeInfo.textContent = `Type:  ${item.type}`;
      let genderInfo = document.createElement("span");
      genderInfo.textContent = `Gender:  ${item.gender}`;
      let originInfo = document.createElement("span");
      originInfo.textContent = `Origin:  ${item.origin.name}`;
      let locationInfo = document.createElement("span");
      locationInfo.textContent = `Location:  ${item.location.name}`;
      let episodesBtn = document.createElement("button");
      episodesBtn.textContent = "Episodes";
      let closeBtn = document.createElement("img");
      closeBtn.src = "/Assets/closeBtn.png";
      closeBtn.classList.add("CloseButton");
      containerInfo.append(
        imageInfo,
        nameInfo,
        genderInfo,
        statusInfo,
        speciesInfo,
        typeInfo,
        originInfo,
        locationInfo,
        episodesBtn,
        closeBtn
      );

      let sectionFilter = document.querySelector(".filterSection");
      let cardMoreInfo = document.querySelector(".moreInfoCharacter");
      cardMoreInfo.append(containerInfo);
      sectionFilter.classList.toggle("invisible");
      cardMoreInfo.classList.toggle("invisible");

      closeBtn.addEventListener("click", () => {
        sectionFilter.classList.toggle("invisible");
        cardMoreInfo.classList.toggle("invisible");
        let containerInfoToDelete = document.querySelector(".containerInfo");
        containerInfoToDelete.remove();
      });
    });
  });
  sectionToAppend.append(...cardsContainer);
};

let filtarray;
//FUNCION FILTER Y MOSTRAR PERSONAJES FILTRADOS
function showCharactersFilterOfData(data, filters) {
  //invocamos la función filter data y le pasamos por parametro la data y todas las condiciones
  filtarray = filterData(data, filters);

  //Ordenando los personajes
  let select = document.querySelector("#sortBy");
  const optionDesc = document.querySelector("#descendent");
  select.addEventListener("change", (e) => {
    console.log(e.target.value);

    let sortOrder = e.target.value;

    let datos;
    if (filtarray) {
      datos = filtarray;
    } else {
      datos = data.results;
    }
    let sortBy = "nombre";
    let dataSort = sortData(datos, sortBy, sortOrder);

    //Borrando lo que pudiera visualizarse de un filtro previo o data inicial
    let eliminatePreElements = document.querySelectorAll(".cardChar");
    eliminatePreElements.forEach((item) => {
      item.remove();
    });

    //visualizando personajes Ordenados
    let filterSection = document.querySelector(
      ".filterSection"
    ); /* 
  if (dataSort) { */
    createCharacters(dataSort, filterSection);
  });

  //visualizando personajes filtrados
  let filterSection = document.querySelector(
    ".filterSection"
  ); /* 
  if (filtarray) { */
  createCharacters(filtarray, filterSection);
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
