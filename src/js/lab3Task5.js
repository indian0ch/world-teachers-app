import  {finalObject} from "./lab3.js";

function SearchObject(arrayObject, parametr, value){
    let searchResult=[];
    for(let obj of arrayObject)
    {
        if(obj[parametr]===value)
          searchResult.push(obj);
    }
    return searchResult;
}

//console.log(SearchObject(finalObject, 'gender','Male'));
