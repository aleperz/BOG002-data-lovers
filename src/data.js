export const filterData = (data, condition) => {
  let arrayFilter = []
  data.results.filter(item =>{   
    let encounter
    let charValues = Object.values(item)
    charValues.forEach(subitem =>{         
    if(subitem === condition){
      encounter = true }})       
    if(encounter){
    arrayFilter.push(item)
    }
  })
    return arrayFilter;  }; 

