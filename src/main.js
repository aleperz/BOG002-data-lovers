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

  //Le seteamos el atributo dataset para su categoria
  containerValues.forEach((item) => {
    let inputOnLi = item.querySelector("input");
    inputOnLi.setAttribute("data-category", categoryOption);
    //le damos append sobre su seccion padre
    OptionsParent.append(item);
  });
  console.log(containerValues);
  containerValues = [];
});

let checkboxes = document.querySelectorAll("input");
let checkboxesArray = Array.from(checkboxes);
console.log(checkboxesArray);

//El usuario solo podra seleccionar un check por categoria
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

//Aplicar los filtros selecionados por el usuario al evento de change CHECKBOX
let conditionsContainer = []; //ex:conditionsContainer = 1it:[[gender,genderless]]||2it:[[status,alive]||3it:[species,alien]]4it:[status,dead]
checkboxes.forEach((item) => {
  item.addEventListener("change", () => {
    let filtrasteIgualCategory = conditionsContainer.find(
      (element) => element[0] === item.dataset.category
    );

    if (filtrasteIgualCategory) {
      let indice = conditionsContainer.indexOf(filtrasteIgualCategory);
      conditionsContainer.splice(indice, 1);
    }
    //Del checkbox change extraemos su data-category y value()
    let conditions = []; //ex: conditions =[gender,genderless]
    conditions.push(item.dataset.category); //ex: gender
    conditions.push(item.value); //ex:genderless
    conditionsContainer.push(conditions);

    console.log(conditionsContainer);

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

document.querySelector("#deleteFilterBtn").addEventListener("click", () => {
  const selectInputs = document.querySelectorAll("input:checked");
  selectInputs.forEach((input) => (input.checked = false));
  conditionsContainer = [];
  let eliminatePreElements = document.querySelectorAll(".cardChar");
  eliminatePreElements.forEach((item) => {
    item.remove();
  });
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
      statusInfo.innerHTML = `Status:  ${item.status}`;
      let nameInfo = document.createElement("span");
      nameInfo.textContent = `Name:  ${item.name}`;
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

//FUNCION FILTER Y MOSTRAR PERSONAJES FILTRADOS
function showCharactersFilterOfData(data, filters) {
  //invocamos la función filter data y le pasamos por parametro la data y todas las condiciones
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
