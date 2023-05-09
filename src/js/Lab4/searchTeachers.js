//import { finalObject } from '../lab3.js';
import { CleanCatalog, CreateElement } from './topTeachers.js';
import {catalogTop} from '../globalVariable.js';
import { arrayFromAPI } from '../Lab5/RequestToAPI.js';
/// Task 4
const textinput = document.querySelector('input[name="inputDataforSearch"]');
const searchbutton = document.getElementById('searchbutton');

searchbutton.addEventListener('click', (event) => {
  CleanCatalog(catalogTop);
  for (const obj of arrayFromAPI) {
    if (
      obj.full_name.split(' ')[0] === textinput.value
      || obj.note === textinput.value
      || obj.age == textinput.value
    ) {
      CreateElement(obj, catalogTop);
    }
  }
});
