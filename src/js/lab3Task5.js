// import { finalObject } from './lab3.js';

function SearchObject(arrayObject, parametr, value) {
  const searchResult = [];
  for (const obj of arrayObject) {
    if (obj[parametr] === value) searchResult.push(obj);
  }
  return searchResult;
}

// console.log(SearchObject(finalObject, 'gender','Male'));
