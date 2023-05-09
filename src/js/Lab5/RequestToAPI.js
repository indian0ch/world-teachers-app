import {catalogTop, url} from '../globalVariable.js';
import {LoadCatalog} from '../Lab4/topTeachers.js';
import { ChangeMock } from '../lab3.js';
let usersArray = [];
const params = {
  results: 50,
};
export const getUsers = () => {
  return fetch(`${url}?results= 50`)
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    .then((responseData) => {
      usersArray = responseData.results;
      console.log(usersArray[2]);
      usersArray=ChangeMock(usersArray);
      LoadCatalog(catalogTop,usersArray);
      return usersArray;
    })
    .catch((error) => {
      console.error(error);
    });
};
export const arrayFromAPI = await getUsers().then((usersArray) => {
  return usersArray;
});
