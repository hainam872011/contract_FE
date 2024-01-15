export const lowercaseKeys = object =>
  Object.keys(object).reduce((accumulator, key) => {
    accumulator[key.toLowerCase()] = object[key];
    return accumulator;
  }, {});

export const textToCapitalize = str => {
  const arr = str.toLowerCase().split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
};

/**
 *
 * @param columns
 * @param filterData
 * @returns {*}
 */
export const filterDataList = (columns, filterData) => {
  let newList = filterData;
  const columnsFilter = columns.filter(col => col.filterValue);
  for (let i = 0; i < columnsFilter.length; i++) {
    const value = columnsFilter[i].filterValue;
    const key = columnsFilter[i].name;
    newList = newList.filter(
      row =>
        row[key]
          .toString()
          .toLowerCase()
          .indexOf(value.toString().toLowerCase()) > -1
    );
  }
  return newList;
};
