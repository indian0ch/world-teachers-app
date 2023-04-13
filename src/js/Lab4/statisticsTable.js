import  {finalObject} from "../lab3.js";
import  {SortArray} from "../lab3Task4.js";
///Task 3
/*
function createColumn(content){
    const column= document.createElement('td');
    return column.textContent=content;
}
*/
const statButtonSort = document.querySelectorAll('.main-row td');
const statButtonPages= document.querySelectorAll('.statistics-menu a');
const tableBody=document.querySelector(".tablebody");
const rowsPerPage = 10;//connect to layout, which was given
loadTable();
function CleanTable(){
    tableBody.innerHTML='';
}
function loadTable(pageNumber=1){
    const startIndex = (pageNumber - 1) * rowsPerPage;
    const endIndex = startIndex+rowsPerPage;
    CleanTable()
    for(let i=startIndex;i<endIndex;i++){
        tableBody.appendChild(loadRow(finalObject[i]));
    }
}

function loadRow(teacherObject){
    const tablecolumn=`<td>${teacherObject.full_name}</td>
    <td>${teacherObject.course}</td>
    <td>${teacherObject.age}</td>
    <td>${teacherObject.gender}</td>
    <td>${teacherObject.country}</td>`;
    const tablerow = document.createElement('tr');
    tablerow.innerHTML=tablecolumn;
    return tablerow;
};

statButtonSort.forEach(button=>
    {button.addEventListener("click", function(){
        CleanTable();
        console.log();
        let sortby=button.className.split(' ')[1];
        SortArray(finalObject,sortby);
        loadTable();
})});
//Button pages
