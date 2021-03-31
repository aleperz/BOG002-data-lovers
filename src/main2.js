let SetupSlides = (characters, btncontainer, charPerSlide) => {
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
SetupSlides(processedData, paginationButtons, charPerSlide);
