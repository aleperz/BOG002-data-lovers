export const filterData = (data, conditions) => {
  //conditions(conditionsContainer) =1it:[[gender,genderless]]
  //2it:[[gender,genderless],[status, alive]]
  //3it:[[gender,genderless],[status, alive],[species, alien]]

  if (!conditions.length) return data;

  let datafilter = [];
  let conditionToEvaluate = conditions[0];
  conditions = conditions.slice(1);

  datafilter = data.filter(
    (subitem) => subitem[conditionToEvaluate[0]] === conditionToEvaluate[1]
  );

  if (conditions.length) {
    return filterData(datafilter, conditions);
  }
  console.log(datafilter);
  return datafilter;
};

export const sortData = (data, sortBy, sortOrder) => {
  let dataSort = data.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return 1;
    } else if (a[sortBy] < b[sortBy]) {
      return -1;
    } else {
      return 0;
    }
  });

  if (sortOrder === "ascendente") {
    dataSort;
  } else {
    dataSort = dataSort.reverse();
    console.log(dataSort);
  }

  return dataSort;
};
