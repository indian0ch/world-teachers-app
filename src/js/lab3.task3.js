import  {finalObject} from "./lab3.js";

function FilterArray(arrayObjects,country,age,gender,favorite){
    return arrayObjects.filter(obj =>
        obj.country===country &&
        obj.age === age &&
        obj.gender === gender &&
        obj.favorite === favorite);
}
//console.log(FilterArray(finalObject,'Ireland',55,'Male','true'))