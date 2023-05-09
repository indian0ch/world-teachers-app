import { finalObject } from '../lab3.js';
import { SortArray } from '../lab3Task4.js';
import { arrayFromAPI } from '../Lab5/RequestToAPI.js';

function CleanTable() {
  tableBody.innerHTML = '';
}
function loadTable(pageNumber = 1) {
  const startIndex = (pageNumber - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  CleanTable();
  for (let i = startIndex; i < endIndex; i += 1) {
    if (i < arrayFromAPI.length) tableBody.appendChild(loadRow(arrayFromAPI[i]));
  }
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
/// Task 3
const statButtonSort = document.querySelectorAll('.main-row td');
let statButtonPages = document.querySelectorAll('.statistics-menu a');
const tableBody = document.querySelector('.tablebody');
const rowsPerPage = 10; // connect to layout, which was given

loadTable();
statButtonSort.forEach((button) => {
  button.addEventListener('click', () => {
    console.log();
    const sortby = button.className.split(' ')[1];
    SortArray(arrayFromAPI, sortby);
    loadTable();
  });
});
// Button pages
statButtonPages.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const countsPages = Math.ceil(arrayFromAPI.length / rowsPerPage);
    if (button === statButtonPages[statButtonPages.length - 1]) loadTable(countsPages);
    else if (
      button === statButtonPages[statButtonPages.length - 2]
      && statButtonPages[1].textContent === 2
    ) {
      const newA = document.createElement('a');
      newA.textContent = '...';
      newA.href = '';
      statButtonPages[0].insertAdjacentElement('afterend', newA);
      statButtonPages[1].textContent = 4;
      statButtonPages[2].textContent = 5;
      newA.addEventListener('click', (event) => {
        event.preventDefault();
        if (statButtonPages[2].textContent == 4) {
          statButtonPages[2].textContent = '2';
          statButtonPages[3].textContent = '3';
          newA.remove();
          console.log('click');
        } else {
          statButtonPages[2].textContent = parseInt(statButtonPages[2].textContent) - 1;
          statButtonPages[3].textContent = parseInt(statButtonPages[3].textContent) - 1;
        }
        statButtonPages = document.querySelectorAll('.statistics-menu a');
      });
    } else if (
      button === statButtonPages[statButtonPages.length - 2]
      && statButtonPages[1].textContent === '...'
    ) {
      if (statButtonPages[3].textContent !== countsPages) {
        statButtonPages[2].textContent = parseInt(statButtonPages[2].textContent) + 1;
        statButtonPages[3].textContent = parseInt(statButtonPages[3].textContent) + 1;
      }
    } else {
      loadTable(parseInt(button.textContent));
    }
    statButtonPages = document.querySelectorAll('.statistics-menu a');
  });
});
