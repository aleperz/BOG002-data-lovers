/* eslint-disable no-undef */
import { filterData, sortData } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

//Despliegue de subitems en barra lateral de filtrado
let options = document.querySelectorAll(".deploy-but");
options.forEach((item) => {
  item.addEventListener("click", () => {
    let parentDeploy = item.parentElement;
    parentDeploy.querySelector(".chosen").toggleAttribute("hidden");
  });
});

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
let dataFiltered;
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

    //Invocamos la funcion para filtrar
    let datos = data.results;

    dataFiltered = filterData(datos, conditionsContainer);

    conditions = [];

    console.log(dataFiltered);

    //Mostramos los datos filtrados
    let filterSection = document.querySelector(".filterSection");
    createCharacters(dataFiltered, filterSection);
  });
});

//Ordenación si el usuario selecciona ascendente o descendente, si no selecciona categoria previamente por defecto lo hara por el nombre del personaje
let sortBy;
let sortOrder;
let datasorted;
let sortOrderContainer = document.querySelector(".sortOrder");
sortOrderContainer.addEventListener("click", (e) => {
  let dataToSort = dataFiltered ? dataFiltered : data.results;
  sortOrder = e.target.id;
  console.log(sortOrder);
  console.log(sortBy);
  sortBy = "name";
  console.log(dataToSort);
  datasorted = sortData(dataToSort, sortBy, sortOrder);
  console.log(datasorted);

  //Mostramos los datos filtrados u ordenados
  let filterSection = document.querySelector(".filterSection");
  createCharacters(datasorted, filterSection);
});

//Boton para borrar todos los filtros aplicados previamente
document.querySelector("#deleteFilterBtn").addEventListener("click", () => {
  const selectInputs = document.querySelectorAll("input:checked");
  selectInputs.forEach((input) => (input.checked = false));

  //Limpiamos el container de condiciones
  conditionsContainer = [];

  //Mostramos todos los personajes
  let filterSection = document.querySelector(".filterSection");
  let datos = data.results;
  createCharacters(datos, filterSection);
});

//Función de crear personajes a partir de: 1. La Data filtrada u Ordenada 2.indicandole seccion (elemento html) donde se hara el append
let createCharacters = (processedData, sectionToAppend) => {
  let current_slide = 1;
  let charPerSlide = 21;
  let sectionFilter = document.querySelector(".filterSection");
  let paginationButtons = document.querySelector("#pagination");

  //funcion para mostrar los personajes de 10 posiciones en c/slide
  let DisplayCharacters = (characters, container, charPerSlide, slide) => {
    //Se borran los personajes mostrados previamente
    container.innerHTML = "";
    //se le resta 1 al slide pagina actual
    slide--;

    //Se extraen los elementos a mostrar por slide
    let start = charPerSlide * slide;
    let end = start + charPerSlide;
    let paginatedCharacters = characters.slice(start, end);

    //se crean cards por cada personaje a mostrar y subcards con info mas detallada
    for (let i = 0; i < paginatedCharacters.length; i++) {
      let character = paginatedCharacters[i];

      let cardCharacter = document.createElement("div");
      cardCharacter.classList.add("cardChar");
      cardCharacter.setAttribute("id", character.id);
      let cardTitle = document.createElement("span");
      cardTitle.textContent = character.name;
      let cardImage = document.createElement("img");
      cardImage.src = character.image;
      cardCharacter.append(cardImage, cardTitle);

      //subcards con info detallada que se crean al click
      cardCharacter.addEventListener("click", () => {
        let containerInfo = document.createElement("div");
        containerInfo.setAttribute("id", character.id);
        containerInfo.classList.add("containerInfo");
        let imageInfo = document.createElement("img");
        imageInfo.src = character.image;
        let statusInfo = document.createElement("span");
        statusInfo.innerHTML = `Status: ${character.status}`;
        let nameInfo = document.createElement("span");
        nameInfo.textContent = `Name: ${character.name}`;
        let speciesInfo = document.createElement("span");
        speciesInfo.textContent = `Specie:  ${character.species}`;
        let typeInfo = document.createElement("span");
        typeInfo.textContent = `Type:  ${character.type}`;
        let genderInfo = document.createElement("span");
        genderInfo.textContent = `Gender:  ${character.gender}`;
        let originInfo = document.createElement("span");
        originInfo.textContent = `Origin:  ${character.origin.name}`;
        let locationInfo = document.createElement("span");
        locationInfo.textContent = `Location:  ${character.location.name}`;
        let episodesBtn = document.createElement("button");
        episodesBtn.textContent = "Episodes";
        let closeBtn = document.createElement("img");
        closeBtn.src =
          "https://raw.githubusercontent.com/aleperz/BOG002-data-lovers/main/Assets/closeBtn.png";
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

        //Al click tambien se oculta la seccion donde se ven las cards generales y se muestra solo la subcard correspondiente
        sectionFilter.classList.toggle("invisible");
        cardMoreInfo.classList.toggle("invisible");

        //al hacer click en el btn cerrar, se oculta la subcard y se puede ver nuevamente la seccion de cards generales
        closeBtn.addEventListener("click", () => {
          sectionFilter.classList.toggle("invisible");
          cardMoreInfo.classList.toggle("invisible");
          let containerInfoToDelete = document.querySelector(".containerInfo");
          containerInfoToDelete.remove();
        });
      });
      //se anexan las cards y su contenido dentro de la seccion deseada
      container.appendChild(cardCharacter);
    }
  };

  //Se setea el slide
  let SetupSlides = (characters, btncontainer, charPerSlide) => {
    btncontainer.innerHTML = "";

    let slide_count = Math.ceil(characters.length / charPerSlide);
    for (let i = 1; i < slide_count + 1; i++) {
      let btn = PaginationButton(i, characters);
      btncontainer.appendChild(btn);
    }
  };

  let PaginationButton = (slide, characters) => {
    let button = document.createElement("button");
    button.innerText = slide;

    if (current_slide == slide) button.classList.add("active");

    button.addEventListener("click", () => {
      current_slide = slide;
      DisplayCharacters(characters, sectionFilter, charPerSlide, current_slide);

      let current_btn = document.querySelector(".pagenumbers button.active");
      current_btn.classList.remove("active");

      button.classList.add("active");
    });

    return button;
  };

  DisplayCharacters(
    processedData,
    sectionToAppend,
    charPerSlide,
    current_slide
  );
  SetupSlides(processedData, paginationButtons, charPerSlide);
};

let filterSection = document.querySelector(".filterSection");
createCharacters(data.results, filterSection);

let hideEpisodeCharacters = () => {
  document
    .querySelector(".charactersFilterSection")
    .classList.toggle("visible");
  document.querySelector(".episodes_section").classList.toggle("visible");
};

let episodesSection = document.querySelector("#season");
episodesSection.addEventListener("click", () => {
  hideEpisodeCharacters();
});

let characterSection = document.querySelector("#characters");
characterSection.addEventListener("click", () => {
  hideEpisodeCharacters();
});

const xlabels = [];
const ylabels = [];
chartIt();

async function chartIt() {
  await getEpisodes();
  const ctx = document.getElementById("charactPerEpi").getContext("2d");
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xlabels,
      datasets: [
        {
          label: "# of Characters per Episode",
          data: ylabels,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

//Traemos la data de episodios

async function getEpisodes() {
  const url_api = "https://rickandmortyapi.com/api/episode";
  const response = await fetch(url_api);
  const dataApiEpisodes = await response.json();
  console.log(dataApiEpisodes);
  const dataEpisodes = dataApiEpisodes.results;
  console.log(dataEpisodes);
  let idOfEpisode = dataEpisodes.map((item) => xlabels.push(item.id));
  console.log(idOfEpisode);
  const episodesSection = document.querySelector(".chapters");
  const episodesContainer = [];

  dataEpisodes.forEach((item) => {
    const episode = document.createElement("div");
    episode.classList.add("episodeContainer");
    const charactersDiv = document.createElement("div");
    charactersDiv.classList.add("cardcharacter");
    const numOfCharactersPerEpisode = item.characters.length;
    ylabels.push(numOfCharactersPerEpisode);
    episode.innerHTML = `<span>${item.name}</span>`;

    /* <span>Number of Characters: ${numOfCharactersPerEpisode}</span> */
    const characters = item.characters;

    async function getCharactersPerEpisode(urlEpisode) {
      const response = await fetch(urlEpisode);
      const dataCharacter = await response.json();
      const cardCharacter = document.createElement("div");

      cardCharacter.innerHTML = `<img src=${dataCharacter.image}></img>`;
      charactersDiv.appendChild(cardCharacter);
    }
    characters.forEach((characterURL) => {
      getCharactersPerEpisode(characterURL);
    });
    episode.append(charactersDiv);
    episodesContainer.push(episode);
  });
  episodesSection.append(...episodesContainer);
}

const xCharsLabels = [];
const yCharsLabels = [];
async function getCharacters() {
  const url_api_char = "https://rickandmortyapi.com/api/character";
  const response = await fetch(url_api_char);
  const dataChar = await response.json();
  let dataCharacters = dataChar.results;
  console.log(dataCharacters);
  dataCharacters.map((item) => xCharsLabels.push(item.name));
  dataCharacters.map((item) => yCharsLabels.push(item.episode.length));
}

getCharacters();

const ctx = document.getElementById("mainCharact").getContext("2d");
const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: xCharsLabels,
    datasets: [
      {
        label: "Top 5 Characters Appearances",
        data: yCharsLabels,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

//OPCION PAGINACION EN LUGAR DE SLIDERS
/* let SetupSlides = (characters, btncontainer, charPerSlide) => {
    container.innerHTML = "";
  
    let slide_count = Math.ceil(characters.length / charPerSlide);
    for (let i = 1; i < slide_count + 1; i++) {
      let btn = PaginationButton(i, characters);
      btncontainer.appendChild(btn);
    }
  };
  
  let PaginationButton = (slide, characters) => {
    let button = document.createElement("button");
    button.innerText = slide;
  
    if (current_slide == slide) button.classList.add("active");
  
    button.addEventListener("click", () => {
      current_slide = slide;
      DisplayCharacters(characters, sectionFilter, charPerSlide, current_slide);
  
      let current_btn = document.querySelector(".pagenumbers button.active");
      current_btn.classList.remove("active");
  
      button.classList.add("active");
    });
  
    return button;
  };
  
  DisplayCharacters(processedData, sectionToAppend, charPerSlide, current_slide);
  SetupSlides(processedData, paginationButtons, charPerSlide);  */

//OPCION SLIDES
/*  let SetupSlides = (characters, charPerSlide) => {
    let slide_count = Math.ceil(characters.length / charPerSlide);
    console.log(slide_count);

    let moveToNextSlide = () => {
      let next_slide;
      if (current_slide < slide_count) {
        next_slide = current_slide++;
        console.log(current_slide);
        return DisplayCharacters(
          processedData,
          sectionToAppend,
          charPerSlide,
          next_slide
        );
      } else {
        next_slide = 1;
        return DisplayCharacters(
          processedData,
          sectionToAppend,
          charPerSlide,
          next_slide
        );
      }
    };

    let moveToPrevSlide = () => {
      if (current_slide > 1) {
        let prev_slide = current_slide--;
        DisplayCharacters(
          processedData,
          sectionToAppend,
          charPerSlide,
          prev_slide
        );
      } else {
        let prev_slide = slide_count;
        DisplayCharacters(
          processedData,
          sectionToAppend,
          charPerSlide,
          prev_slide
        );
      }
    };

    console.log(document.querySelector(".moving_buttons"));
    document
      .querySelector(".moving_buttons")
      .addEventListener("click", (event) => {
        console.log(event.target.id);
        if (event.target.id === "next") {
          moveToNextSlide();
        } else {
          moveToPrevSlide();
        }
      });
  };
  DisplayCharacters(
    processedData,
    sectionToAppend,
    charPerSlide,
    current_slide
  );
  SetupSlides(processedData, charPerSlide);
}; */
