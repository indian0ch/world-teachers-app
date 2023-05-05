import { finalObject } from '../lab3.js';
import { checkValidation } from '../lab3Task2.js';
import { catalogTop, CleanCatalog, LoadCatalog } from './topTeachers.js';

function GetValues(event) {
  event.preventDefault();
  const birthdate = new Date(document.querySelector('#datebirth').value);
  const newObject = {
    gender: document.querySelector('input[name="gender"]:checked').value,
    full_name: document.querySelector('#name').value,
    city: document.querySelector('#town').value,
    country: document.querySelector('#country').value,
    email: document.querySelector('#email').value,
    b_day: document.querySelector('#datebirth').value,
    age: currentDate.getFullYear() - birthdate.getFullYear(),
    phone: document.querySelector('#phone').value,
    course: document.querySelector('#speciality').value,
    favorite: Math.random() < 0.5,
    bg_color: document.querySelector('#color').value,
    note: document.querySelector('#comments').value,
  };
  if (checkValidation(newObject) === true) {
    finalObject.push(newObject);
    console.log(`Added!${finalObject.length}`);
    CleanCatalog(catalogTop);
    LoadCatalog(catalogTop);
    alert('Користувача додано!');
  } else {
    alert('Введені дані невалідні!');
  }
}
/// Task 5
const form = document.getElementById('popup-form');
const popupOpen = document.querySelectorAll('.mainpopup-open');
const currentDate = new Date();
const formatCurrentDate = currentDate.toLocaleDateString('en-CA');
document.getElementById('datebirth').max = formatCurrentDate;

form.addEventListener('submit', GetValues);
popupOpen.forEach((button) => {
  button.addEventListener('click', (event) => {
    popup.style.opacity = 1;
    popup.style.visibility = 'visible';
    event.preventDefault();
  });
});
