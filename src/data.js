export const filterData = (data, conditions) => {
  //data = datos = data.results
  //conditions(conditionsContainer) =[[gender,genderless],[status, alive],[species, alien]]
  if(conditions.length) return data
  
  let datafilter = [];
  let conditionToEvaluate = conditions.shift(); //1:[gender,genderless]||2:[status, alive]||3:
  //1:conditions = [[status, alive],[species, alien]]
  //2:conditions = [[species, alien]]

  datafilter = data.filter(
    (subitem) => subitem[conditionToEvaluate[0]] === conditionToEvaluate[1]
  );
  console.log(datafilter, conditionToEvaluate)
  if (conditions.length) {
    return filterData(datafilter, conditions);
  }
  return datafilter;
};
