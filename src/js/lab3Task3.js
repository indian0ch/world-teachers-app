import  {finalObject} from "./lab3.js";

export function FilterArray(arrayObjects,country='Germany',age1='18',gender='Male',favorite='false',age2='60'){
    return arrayObjects.filter(obj =>
        obj.country===country &&
        obj.age >= age1 && obj.age <= age2 &&
        obj.gender === gender &&
        obj.favorite === favorite);
}