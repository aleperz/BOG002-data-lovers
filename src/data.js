export const filterData = (data, condition) => {
  let arrayFilter = []
  data.results.filter(item =>{     
    let charEntries = Object.entries(item)
    let yaya = []
    charEntries.forEach(subitem =>{
      yaya.push(subitem.join())
    })  
    let encounter = yaya.includes(condition)       
    if(encounter){
    arrayFilter.push(item)
    }
  })
    return arrayFilter;  }; 

