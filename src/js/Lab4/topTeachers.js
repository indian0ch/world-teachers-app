import  {finalObject} from "../lab3.js";
import  {FilterArray} from "../lab3Task3.js";
export const catalogTop = document.querySelector(".topteacher-catalog");
//Task1 and Task2
///Top Teachers
CleanCatalog(catalogTop);//Clean top teacher's grid
for(let obj of finalObject){
    CreateElement(obj,catalogTop);
}
export function CreateElement(obj,catalog){
  let card = document.createElement("div");
  card.classList.add("teachercard");

  // image div
  let imageDiv = document.createElement("div");
  imageDiv.classList.add("image");
  
  // image avatar
  if (obj.picture_thumbnail != undefined) {
    var imgPhoto = document.createElement("img");
    imgPhoto.src = obj.picture_thumbnail;
    imgPhoto.alt = obj.full_name;      
    imageDiv.appendChild(imgPhoto);
  } else {
    var imageTextDiv = document.createElement("div");
    imageTextDiv.classList.add("image-text");
    let initials = document.createElement("p");
    let NameAndSurname=obj.full_name.split(' ');
    initials.textContent=NameAndSurname.map(name => name.charAt(0)+'.').join('');
    imageTextDiv.appendChild(initials);
    imageDiv.appendChild(imageTextDiv);
  }
  
  // pib class
  let pib = document.createElement("p");
  pib.classList.add("pib");
  pib.textContent = obj.full_name;

  // country class
  let country = document.createElement("p");
  country.classList.add("country");
  country.textContent = obj.country;
  // image star
  if (obj.favorite === true && catalog != undefined) {
    let imgStar = document.createElement("img");
    imgStar.src = "images/star.png";
    imgStar.alt = "Star's photo";
    imgStar.className = "image-star";
    imageDiv.appendChild(imgStar);
  }
  card.appendChild(imageDiv);
  card.appendChild(pib);
  //typesubject class. If undefined(favourite catalog) - nothing
  if(catalog!=undefined){
    let typesubject = document.createElement("p");
    typesubject.classList.add("typesubject");
    typesubject.textContent = obj.course;
    card.appendChild(typesubject);
  }
  card.appendChild(country);
  if(catalog==undefined){
    return card;
  }
  else{
      catalog.appendChild(card);
  }
}
///Country select creater (we should sort by country,not region)
const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan","Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi","Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic (CAR)", "Chad", "Chile", "China", "Colombia", "Comoros", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic (Czechia)","Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic","Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (formerly Swaziland)", "Ethiopia","Fiji", "Finland", "France","Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana","Haiti", "Honduras", "Hungary","Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy","Jamaica", "Japan", "Jordan","Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan","Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg","Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)","Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia (formerly Macedonia)", "Norway","Oman","Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal","Qatar","Romania", "Russia", "Rwanda","Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone"]
const countrySelector=document.getElementById("region");
for (let i = 0; i < countries.length; i++) {
  const option = document.createElement("option");
  option.value = countries[i];
  option.innerHTML = countries[i];
  countrySelector.appendChild(option);
}
///Mожливість фільтрації викладачів на сторінці
const allSelectTags=document.querySelectorAll(".properties select");
const allCheckBoxs=document.querySelectorAll('.properties input[type="checkbox"]');
const allInputs = Array.from(allSelectTags).concat(Array.from(allCheckBoxs));

allInputs.forEach(select=>{
  select.addEventListener("change", function() {
    const [age1,age2]=allSelectTags[0].value.split("-").map(Number);
    CleanCatalog(catalogTop);
    const filterArray=FilterArray(finalObject,`${allSelectTags[1].value}`,age1,`${allSelectTags[2].value}`,allCheckBoxs[1].checked,age2,allCheckBoxs[0].checked);
    for(let obj of filterArray){
      CreateElement(obj,catalogTop);
   }
  })
});

export function CleanCatalog(catalog){
  const teachercards = catalog.querySelectorAll(".teachercard");
  teachercards.forEach((card)=>{
    card.remove();
  });
}
export function LoadCatalog(catalog){
  CleanCatalog(catalog);
  for(let obj of finalObject){
    CreateElement(obj,catalog);
  }
}
