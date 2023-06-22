import { arrayFromAPI } from '../Lab5/RequestToAPI.js';
import { searchObject } from '../lab3Task5.js';
/// Task 4
const textinput = document.querySelector('input[name="inputDataforSearch"]');
const searchbutton = document.getElementById('searchbutton');

searchbutton.addEventListener('click', (event) => {
  searchObject(arrayFromAPI, textinput.value);
});
