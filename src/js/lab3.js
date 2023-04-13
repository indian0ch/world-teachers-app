import  {randomUserMock,additionalUsers} from "./mock.js";
///Task 1///
let formattedRandomUserMock=[];
let courses=["Mathematics", "Physics", "English", "Computer Science", "Dancing", "Chess", "Biology", "Chemistry", "Law", "Art", "Medicine", "Statistics"];
function ChangeMock(){
    for(let i=0;i<randomUserMock.length;i++)
    {
        let elementArray=randomUserMock[i];
        let randomIndex = Math.floor(Math.random() * courses.length);
        formattedRandomUserMock[i]={
            gender:upperFirst(elementArray.gender),
            title:elementArray.name.title,
            full_name: `${elementArray.name.first} ${elementArray.name.last}`,
            city: elementArray.location.city,
            state: elementArray.location.state,
            country: elementArray.location.country,
            postcode: elementArray.postcode,   
            coordinates: { "latitude": elementArray.location.coordinates.latitude, "longitude": elementArray.location.coordinates.longitude },   
            timezone: { "offset":elementArray.location.timezone.offset, "description": elementArray.location.timezone.description },  
            email: elementArray.email,  
            b_day: elementArray.dob.date,
            age: elementArray.dob.age,
            phone: elementArray.phone, 
            picture_large: elementArray.picture.large,  
            picture_thumbnail: elementArray.picture.thumbnail ,
            id:`${i}${`${elementArray.name.first}`.charAt(0)}${`${elementArray.name.last}`.charAt(0)}`,
            favorite:Math.random() < 0.5,
            course:courses[randomIndex],
            bg_color:getRandomColor(),
            note:`Some notation of ${elementArray.name.first}`
        }
    }
}
function upperFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}  
function getRandomColor() {
    const r = evaluateColor(); // generate random red value
    const g = evaluateColor(); // generate random green value
    const b = evaluateColor(); // generate random blue value
    return `#${r}${g}${b}`; // return color code in format "#RRGGBB"
}
function evaluateColor(){
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
}
function mergedArrays(arr1,arr2)//the function returns an array of assigned objects
{
    ChangeMock();//Making objects from array Random... to requirement view
    let result=[];
    let counter=0;//variable for control number of object at second array
    for(let i of arr1)
    {
        const object1 = i;
        const object2 = arr2[counter];
        const mergedObject = {...object2, ...object1};
        result.push(mergedObject);
        if(counter==additionalUsers.length-1){
            counter=0;
        }
        else{
            counter++;
        }
    }
    return result;
}
export const finalObject=mergedArrays(formattedRandomUserMock,additionalUsers);


//console.log(finalObject);

