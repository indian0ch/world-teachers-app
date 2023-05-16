import { sortArray } from '../sortArray.js';
import { arrayFromAPI } from '../Lab5/RequestToAPI.js';
import {rowsPerPage} from '../globalVariable.js';
import {removingAdditionalThreeDottes } from './topTeachers.js'

function cleanTable() {
  tableBody.innerHTML = '';
}
function loadTable(pageNumber = 1) {
  const startIndex = (pageNumber - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  cleanTable();
  for (let i = startIndex; i < endIndex; i += 1) {
    if (i < arrayFromAPI.length) tableBody.appendChild(loadRow(arrayFromAPI[i]));
  }
}
function loadStartMenu(){
  if(statButtonPages[1].textContent==='...')
    removingAdditionalThreeDottes(statButtonPages,newAStat);
}
function loadRow(teacherObject) {
  const tablecolumn = `<td>${teacherObject.full_name}</td>
    <td>${teacherObject.course}</td>
    <td>${teacherObject.age}</td>
    <td>${teacherObject.gender}</td>
    <td>${teacherObject.country}</td>`;
  const tablerow = document.createElement('tr');
  tablerow.innerHTML = tablecolumn;
  return tablerow;
}
function onSortTable(button){
  const sortby = button.className.split(' ')[1];
  sortArray(arrayFromAPI, sortby,sortDirection);
  loadTable();
  loadStartMenu();
  sortDirection = (sortDirection === 'desc') ? 'asc' : 'desc';
}
function onMenuTableClick(event,button){
  event.preventDefault();
  const countsPages = Math.ceil(arrayFromAPI.length / rowsPerPage);
  if (button === statButtonPages[statButtonPages.length - 1]) loadTable(countsPages);
  else if (
    button === statButtonPages[statButtonPages.length - 2]
    && statButtonPages[1].textContent == 2
  ) {
    newAStat = document.createElement('a');
    newAStat.textContent = '...';
    newAStat.href = '';
    statButtonPages[0].insertAdjacentElement('afterend', newAStat);
    statButtonPages[1].textContent = 4;
    statButtonPages[2].textContent = 5;
    newAStat.addEventListener('click', (event) => {
      event.preventDefault();
      if (statButtonPages[2].textContent == 4) {
        removingAdditionalThreeDottes(statButtonPages,newAStat);
      } else {
        statButtonPages[2].textContent = parseInt(statButtonPages[2].textContent) - 1;
        statButtonPages[3].textContent = parseInt(statButtonPages[3].textContent) - 1;
      }
      statButtonPages = document.querySelectorAll('.statistics-menu a');
    });
  } else if (
    button === statButtonPages[statButtonPages.length - 2]
    && statButtonPages[1].textContent == '...'
  ) {
    if (statButtonPages[3].textContent != countsPages) {
      statButtonPages[2].textContent = parseInt(statButtonPages[2].textContent) + 1;
      statButtonPages[3].textContent = parseInt(statButtonPages[3].textContent) + 1;
    }
  } else if(button == statButtonPages[0]&& statButtonPages[1].textContent == "..."){
    //click on 1, when '1 ... 4 5 ... Last'
    if(statButtonPages[1].textContent==='...'){
      removingAdditionalThreeDottes(statButtonPages,newAStat);
      loadTable(parseInt(button.textContent));
    }
  } else {
    loadTable(parseInt(button.textContent));
  }
  statButtonPages = document.querySelectorAll('.statistics-menu a');
}
/// Task 3
const statButtonSort = document.querySelectorAll('.main-row td');
const tableBody = document.querySelector('.tablebody');
let statButtonPages = document.querySelectorAll('.statistics-menu a');
let sortDirection='asc';
let newAStat=null;

loadTable();
//Sort buttons
statButtonSort.forEach((button) => {
  button.addEventListener('click', () => onSortTable(button));
});
//Menu buttons
statButtonPages.forEach((button) => {
  button.addEventListener('click', (event) => onMenuTableClick(event,button));
});
