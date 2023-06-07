import { loadCatalog } from "./topTeachers.js";
import { generateFavorite } from "./favouriteTeachers.js";
import {
  catalogFavourite,
  catalogTop,
  rowsPerPage,
} from "../globalVariable.js";
import { arrayFromAPI } from "../Lab5/RequestToAPI.js";

function getNextBirthday(obj) {
  const today = dayjs();
  const parsedBirthday = dayjs(obj.b_day);
  const nextBirthday = parsedBirthday.year(today.year());
  if (nextBirthday.isBefore(today)) {
    nextBirthday.add(1, "year");
  }
  let dayCounts = parseInt(nextBirthday.diff(today, "day", true));
  let countsOfDayInTodayYear = 365;
  if (dayCounts < 0) {
    if (
      dayjs(`${today.year()}-12-30`).isSame(
        today.startOf("year").add(countsOfDayInTodayYear, "day")
      )
    ) {
      countsOfDayInTodayYear++;
    }
    return Math.abs(dayCounts) + countsOfDayInTodayYear;
  }
  return dayCounts;
}

function onCardClick(event) {
  const clickedElement = event.target;
  const clickedCard = clickedElement.parentNode.parentNode;
  if (clickedElement.parentNode.classList.contains("image")) {
    const pibElement = clickedCard.querySelector(".pib").textContent.trim(); // fixed
    for (const obj of arrayFromAPI) {
      if (obj.full_name === pibElement) {
        const whenNextBirthday = getNextBirthday(obj);
        popupinfo_form.innerHTML = "";
        const personalinfo = document.createElement("div");
        personalinfo.className = "popupinfo-personalinfo";
        const personalinfodiv_image = document.createElement("div");
        personalinfodiv_image.className = "personalinfo-image";
        const personalinfo_data = document.createElement("div");
        personalinfo_data.className = "personalinfo-info";
        personalinfo_data.innerHTML = `              
        <p id="info-surname">${obj.full_name}</p>
        <p id="info-sub">${obj.course}</p>
        <p id="info-location">${obj.city},${obj.country}</p>
        <p>${obj.age}, ${obj.gender}</p>
        <p id="info-email">${obj.email}</p>
        <p id="info-phone">${obj.phone}</p>
        <p id="info-phone">Next birthday in ${whenNextBirthday} days</p>`;
        personalinfodiv_image.innerHTML = `<img src="${obj.picture_thumbnail}" alt="" style="border: 10px solid ${obj.bg_color};">`;
        personalinfo.appendChild(personalinfodiv_image);
        personalinfo.appendChild(personalinfo_data);
        // block with a star
        const popupinfostardiv = document.createElement("div");
        popupinfostardiv.className = "star1";
        const popupinfostar = document.createElement("img");
        popupinfostar.id = "popupStar";
        if (obj.favorite === true) {
          popupinfostar.src = "images/star.png";
        } else {
          popupinfostar.src = "images/empty-star-.png";
        }
        // add event listener to img element
        popupinfostar.addEventListener("click", () => {
          const note_popup = document.querySelector(".popupinfo-notation");
          if (popupinfostar.src.includes("empty-star")) {
            popupinfostar.src = "images/star.png";
            for (const obj of arrayFromAPI) {
              if (obj.note === note_popup.textContent.trim()) {
                obj.favorite = true;
              }
            }
          } else {
            popupinfostar.src = "images/empty-star-.png";
            for (const obj of arrayFromAPI) {
              if (obj.note === note_popup.textContent.trim()) {
                obj.favorite = false;
              }
            }
          }
          const pageNumber =
            Math.floor(arrayFromAPI.indexOf(obj) / rowsPerPage) + 1;
          loadCatalog(catalogTop, arrayFromAPI, pageNumber);
          generateFavorite();
        });
        popupinfostardiv.appendChild(popupinfostar);
        personalinfo.appendChild(popupinfostardiv);
        // block with description
        const description = document.createElement("div");
        description.className = "popupinfo-description";
        description.innerHTML = `            
        <div class="popupinfo-notation">
          <p>${obj.note}</p>
        </div>
        <div id="map" style="height: 400px;"></div>
        <div class="popupinfo-map">
          <a href="">toggle map</a>
        </div>`;
        popupinfo_form.appendChild(personalinfo);
        popupinfo_form.appendChild(description);
        popupinfo.style.opacity = 1;
        popupinfo.style.visibility = "visible";
        let map = L.map("map").setView(
          [obj.coordinates.latitude, obj.coordinates.longitude],
          2
        );
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 10,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);
        // map.remove();
      }
    }
  }
}
function onPopupClose(event) {
  popupinfo.style.opacity = 0;
  popupinfo.style.visibility = "hidden";
  popup.style.opacity = 0;
  popup.style.visibility = "hidden";
  event.preventDefault();
}

// Task1 Пункт: Функціональність відкриття поп апу для карток
const popup = document.getElementById("popup");
const popupinfo = document.getElementById("popupinfo");
const popupinfo_form = document.querySelector(".popupinfo-form");
const popupClose = document.querySelectorAll(".popup-close");
const allCatalogs = [catalogTop, catalogFavourite];

allCatalogs.forEach((catalog) => {
  catalog.addEventListener("click", (event) => onCardClick(event));
});
// Close popup functional
popupClose.forEach((button) => {
  button.addEventListener("click", (event) => onPopupClose(event));
});
