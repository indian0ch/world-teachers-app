import  {finalObject} from "./lab3.js";

function PercentageSearch(arrayObject, parametr, value){
    let count=0;
    for(let obj of arrayObject)
    {
        if(obj[parametr]===value){
            count++;
        }
    }
    return (count/arrayObject.length)*100;
}
//console.log(PercentageSearch(finalObject, 'gender','Female'));