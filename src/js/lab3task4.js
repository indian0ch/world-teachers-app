import  {finalObject} from "./lab3.js";

function SortArray(arrayObjects,sortby,sortDirection){
    if(typeof arrayObjects[0][sortby] === "string")
        arrayObjects.sort((a, b) => a[sortby] > b[sortby] ? 1 : -1);
    else
        arrayObjects.sort((a, b) => a[sortby] > b[sortby] ? 1 : -1);
    if(sortDirection === 'desc')
        arrayObjects.reverse();
}
SortArray(finalObject,'country','desc');
console.log(finalObject);