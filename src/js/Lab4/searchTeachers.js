//import { finalObject } from '../lab3.js';
import { arrayFromAPI } from '../Lab5/RequestToAPI.js';
import { SearchObject} from '../lab3Task5.js';
/// Task 4
const textinput = document.querySelector('input[name="inputDataforSearch"]');
const searchbutton = document.getElementById('searchbutton');

searchbutton.addEventListener('click', (event) => {
  SearchObject(arrayFromAPI,textinput.value)
});
