export const filterData = (data, conditions) => {
  //conditions(conditionsContainer) =[[gender,genderless],[status, alive],[species, alien]]
  if(!conditions.length) return data
  
  let datafilter = [];
  let conditionToEvaluate = conditions.shift();

  datafilter = data.filter(
    (subitem) => subitem[conditionToEvaluate[0]] === conditionToEvaluate[1]
  );
  console.log(datafilter, conditionToEvaluate)
  if (conditions.length) {
    return filterData(datafilter, conditions);
  }
  return datafilter;
};
