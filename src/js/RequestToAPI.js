import {catalogTop, url} from './globalVariable.js';
import {loadCatalog} from './functional-adjust/topTeachers.js';
import { changeMock } from './lab3.js';

export const getUsers = () => {
  return fetch(`${url}?results= 50`)
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    .then((responseData) => {
      usersArray = responseData.results;
      usersArray=changeMock(usersArray);
      loadCatalog(catalogTop,usersArray);
      return usersArray;
    })
    .catch((error) => {
      console.error(error);
    });
};
export const getNew10Use=()=>{
  return fetch(`${url}?results= 10`)
  .then((response) => {
    return response.json();
  })
  .then((responseData) => {
    usersArray = responseData.results;
    usersArray=changeMock(usersArray);
    return usersArray;
  })
  .catch((error) => {
    console.error(error);
  });
}
export const getNew10User = async () => {
  const new_arr = await getNew10Use().then((usersArray) => {
    return usersArray;
  });
  for (let obj of new_arr) {
    arrayFromAPI.push(obj);
  }
}

let usersArray = [];
export const arrayFromAPI = await getUsers().then((usersArray) => {
  return usersArray;
});
