export const filterData = (data, conditions) => {
  console.log(conditions);
  //conditions(conditionsContainer) =1it:[[gender,genderless]]
  //2it:[[gender,genderless],[status, alive]]
  //3it:[[gender,genderless],[status, alive],[species, alien]]

  /*  let datafilter = [];

  for (let i = 0; i < conditions.length; i++) {
    datafilter = data.filter(
      (characters) => characters[conditions[i][0]] === conditions[i][1]
    );

    console.log(datafilter);

    if (conditions[i + 1]) {
      let condition = conditions.slice(i + 1);
      return filterData(datafilter, condition);
    }
  }

  console.log(datafilter);

  return datafilter;
}; */

  let datafilter = [];
  let conditionToEvaluate = conditions[0];
  conditions = conditions.slice(1);

  datafilter = data.filter(
    (subitem) => subitem[conditionToEvaluate[0]] === conditionToEvaluate[1]
  );
  console.log(datafilter, conditionToEvaluate);
  if (conditions.length) {
    return filterData(datafilter, conditions);
  }
  return datafilter;
};
