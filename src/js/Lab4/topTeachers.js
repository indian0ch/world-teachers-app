import { filterArray } from "../filtersArray.js";
import { catalogTop, rowsPerPage } from "../globalVariable.js";
import { arrayFromAPI, getNew10User } from "../Lab5/RequestToAPI.js";

export function cleanCatalog(catalog) {
  const teachercards = catalog.querySelectorAll(".teachercard");
  console.log("Click 22");
  teachercards.forEach((card) => {
    card.remove();
  });
}
export function loadCatalog(catalog, ObjectsArray, pageNumber = 1) {
  const startIndex = (pageNumber - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  console.log("Click 23");
  cleanCatalog(catalog);
  for (let i = startIndex; i < endIndex; i += 1) {
    if(ObjectsArray[i]!==undefined){
      createElement(ObjectsArray[i], catalog);
    }
  }
}
export function createElement(obj, catalog) {
  const card = document.createElement("div");
  card.classList.add("teachercard");

  // image div
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("image");

  // image avatar
  if (obj.picture_thumbnail !== undefined) {
    const imgPhoto = document.createElement("img");
    imgPhoto.src = obj.picture_thumbnail;
    imgPhoto.alt = obj.full_name;
    imageDiv.appendChild(imgPhoto);
  } else {
    const imageTextDiv = document.createElement("div");
    imageTextDiv.classList.add("image-text");
    const initials = document.createElement("p");
    const NameAndSurname = obj.full_name.split(" ");
    initials.textContent = NameAndSurname.map(
      (name) => `${name.charAt(0)}.`
    ).join("");
    imageTextDiv.appendChild(initials);
    imageDiv.appendChild(imageTextDiv);
  }

  // pib class
  const pib = document.createElement("p");
  pib.classList.add("pib");
  pib.textContent = obj.full_name;

  // country class
  const country = document.createElement("p");
  country.classList.add("country");
  country.textContent = obj.country;
  // image star
  if (obj.favorite === true && catalog !== undefined) {
    const imgStar = document.createElement("img");
    imgStar.src = "images/star.png";
    imgStar.alt = "Star's photo";
    imgStar.className = "image-star";
    imageDiv.appendChild(imgStar);
  }
  card.appendChild(imageDiv);
  card.appendChild(pib);
  // typesubject class. If undefined(favourite catalog) - nothing
  if (catalog != +undefined) {
    const typesubject = document.createElement("p");
    typesubject.classList.add("typesubject");
    typesubject.textContent = obj.course;
    card.appendChild(typesubject);
  }
  card.appendChild(country);
  if (catalog === undefined) {
    return card;
  }
  catalog.appendChild(card);
}
export const removingAdditionalThreeDottes = (arr, element) => {
  if (topButtonPages[1].textContent === "...") {
    arr[2].textContent = "2";
    arr[3].textContent = "3";
    element.remove();
    topButtonPages = document.querySelectorAll(".topteacher-menu a");
  }
};
function filterTeachers(isFilterOnPage) {
  let [age1, age2] = allSelectTags[0].value.split("-").map(Number);
  age2 = age2 == 1 ? 100 : age2; //if == 1 - age do not choosen ans we need to put max
  const filteredArray = filterArray(
    arrayFromAPI,
    `${allSelectTags[1].value}`,
    `${allSelectTags[2].value}`,
    allCheckBoxs[1].checked,
    allCheckBoxs[0].checked,
    age1,
    age2
  );
  if(isFilterOnPage==true){
    cleanCatalog(catalogTop);
    removingAdditionalThreeDottes(topButtonPages,newA);
    loadCatalog(catalogTop, filteredArray);
  } else{
    return filteredArray;
  }
}
function onMenuTopClick(event,button){
  event.preventDefault();
  const newArr=filterTeachers();
  const countsPages = Math.ceil(newArr.length / rowsPerPage);
  if (button == topButtonPages[topButtonPages.length - 2]) {
    //Last
    loadCatalog(catalogTop, newArr, parseInt(countsPages));
  } else if (
    //1 2 3 ... Last  Load Click on ...
    button == topButtonPages[topButtonPages.length - 3] &&
    topButtonPages[1].textContent == 2
  ) {
    if (topButtonPages[2].textContent < countsPages){
      newA = document.createElement("a");
      newA.textContent = "...";
      newA.href = "";
      topButtonPages[0].insertAdjacentElement("afterend", newA);
      topButtonPages[1].textContent = 4;
      topButtonPages[2].textContent = 5;
      newA.addEventListener("click", (event) => {
        event.preventDefault();
        if (topButtonPages[2].textContent == 4) {
          removingAdditionalThreeDottes(topButtonPages, newA);
        } else {
          topButtonPages[2].textContent =
            parseInt(topButtonPages[2].textContent) - 1;
          topButtonPages[3].textContent =
            parseInt(topButtonPages[3].textContent) - 1;
        }
        topButtonPages = document.querySelectorAll(".topteacher-menu a");
      }); 
    }
  } else if (
    //1 2 ... 4 5 ... Last Load Click on second ...
    button == topButtonPages[topButtonPages.length - 3] &&
    topButtonPages[1].textContent == "..."
  ) {
    console.log(topButtonPages[1].textContent);
    if (topButtonPages[3].textContent < countsPages) {
      topButtonPages[2].textContent =
        parseInt(topButtonPages[2].textContent) + 1;
      topButtonPages[3].textContent =
        parseInt(topButtonPages[3].textContent) + 1;
    }
  } else if (button == topButtonPages[topButtonPages.length - 1]) {
    //click on Load more
    getNew10User();
  } else if (
    button == topButtonPages[0] &&
    topButtonPages[1].textContent == "..."
  ) {
    //click on 1, when '1 ... 4 5 ... Last'
    if (topButtonPages[1].textContent === "...") {
      removingAdditionalThreeDottes(topButtonPages, newA);
      loadCatalog(catalogTop, newArr, parseInt(button.textContent));
    }
  } else {
    // click on special number
    if(button.textContent<=countsPages){
      loadCatalog(catalogTop, newArr, parseInt(button.textContent));
    }
  }
  topButtonPages = document.querySelectorAll(".topteacher-menu a");
}

let topButtonPages = document.querySelectorAll(".topteacher-menu a");
let newA = null; //new element '...'
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic (CAR)",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic (Czechia)",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini (formerly Swaziland)",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (formerly Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia (formerly Macedonia)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
];
const countrySelector = document.getElementById("region");
const allSelectTags = document.querySelectorAll(".properties select");
const allCheckBoxs = document.querySelectorAll(
  '.properties input[type="checkbox"]'
);
const allInputs = Array.from(allSelectTags).concat(
  Array.from(allCheckBoxs)
);

// Top teacher logic
for (let i = 0; i < countries.length; i += 1) {/// Country select creater (we should sort by country,not region)
  const option = document.createElement("option");
  option.value = countries[i];
  option.innerHTML = countries[i];
  countrySelector.appendChild(option);
}
cleanCatalog(catalogTop);

allInputs.forEach((select) => {
  select.addEventListener("change", () => {filterTeachers(true)});
});
topButtonPages.forEach((button) => {
  button.addEventListener("click", (event) => onMenuTopClick(event,button));
});
