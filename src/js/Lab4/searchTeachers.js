import { finalObject } from '../lab3.js';
import { catalogTop, CleanCatalog, CreateElement } from './topTeachers.js';
/// Task 4
const textinput = document.querySelector('input[name="inputDataforSearch"]');
const searchbutton = document.getElementById('searchbutton');

searchbutton.addEventListener('click', (event) => {
  CleanCatalog(catalogTop);
  for (const obj of finalObject) {
    if (
      obj.full_name.split(' ')[0] === textinput.value
      || obj.note === textinput.value
      || obj.age == textinput.value
    ) {
      CreateElement(obj, catalogTop);
    }
  }
});
