import  {finalObject} from "./lab3.js";

export function SortArray(arrayObjects,sortby,sortDirection){
    arrayObjects.sort((a, b) => a[sortby] > b[sortby] ? 1 : -1);
    if(sortDirection === 'desc')
        arrayObjects.reverse();
}
//SortArray(finalObject,'country','asc');
//console.log(finalObject[1]);
