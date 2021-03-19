export const filterData = (data, conditions) => {
  let arraysSemiFiltrados = []

  //Filtro de condiciones iniciales : devuelve un array de arrays que cumplen cada una de las condiciones checkeadas
conditions.forEach(item => {
          let condicionValues = []
          condicionValues.push(item.value) 
          condicionValues.forEach(value =>{    
  let arraysFiltrados = []       
  data.results.filter(item =>{     
    let charEntries = Object.entries(item)
    console.log(charEntries)
    let yaya = []
    charEntries.forEach(subitem =>{
      yaya.push(subitem.join())
    })  
    let encounter = yaya.includes(value)       
    if(encounter){
      arraysFiltrados.push(item)
    }
  })
  arraysSemiFiltrados.push(arraysFiltrados)
})})

  //Se extrae la intercepcion de los arrays: los elementos que cumplan/tengan en comun todas las condiciones seleccionadas por el usuario
  let firstArray= []
  let filtarray =[]

  //Si el usuario solo selecciona una condiciona devolvera el unico array con el primer filtro de esa unica condición
  console.log(arraysSemiFiltrados)
  if(arraysSemiFiltrados.length > 1){
          firstArray = arraysSemiFiltrados[0]
          console.log(firstArray)
  for(let i = 1; i < arraysSemiFiltrados.length;i++){  

      //en la 1a iter. se concat el primer array con el segundo               
      let arrayConcat = firstArray.concat(arraysSemiFiltrados[i])

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
      firstArray = filtarray    
      }                                 
  }
  else{
        arraysSemiFiltrados.forEach(item =>{
          item.forEach(subitem =>{
              filtarray.push(subitem)
          })
      })
  }
  return filtarray;
  };   