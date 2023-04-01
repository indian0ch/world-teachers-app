import  {finalObject} from "./lab3.js";

function PercentageSearch(arrayObject, parametr, value,range){
    let count=0;
    if(parametr != "b_day"&&parametr != "age"){
        for(let obj of arrayObject){
            if(obj[parametr]>value){
                    count++;
            }
        }
    }
    else{
        for(let obj of arrayObject){
            if(range==="greater"){
                if(obj[parametr]>=value){
                    count++;
                }
            }
            else{
                if(obj[parametr]<value){
                    count++;
                }
            }
        }
    }
    return (count/arrayObject.length)*100;
}
//console.log(PercentageSearch(finalObject, 'age','75','less'));
