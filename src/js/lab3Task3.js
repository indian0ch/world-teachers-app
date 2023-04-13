import  {finalObject} from "./lab3.js";

export function FilterArray(arrayObjects,country,age1,gender='Male',favorite='false',age2){
    return arrayObjects.filter(obj =>
        obj.country===country &&
        obj.age >= age1 && obj.age <= age2 &&
        obj.gender === gender &&
        obj.favorite === favorite);
}
//console.log(finalObject[0]);
//console.log(FilterArray(finalObject,'Germany',15, 75,'Male',true))