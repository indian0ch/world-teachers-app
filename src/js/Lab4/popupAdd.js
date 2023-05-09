import { checkValidation } from "../lab3Task2.js";
import { CleanCatalog, LoadCatalog } from "./topTeachers.js";
import { catalogTop, urlJson } from "../globalVariable.js";
import { arrayFromAPI } from "../Lab5/RequestToAPI.js";

function notificateUser(messageTitle, messageBody, status = "warning") {
  swal(messageTitle, messageBody, status, {
    button: "OK",
  });
}
async function postReq(obj) {
  Object.assign(params, { body: JSON.stringify(obj) });
  const req = await fetch(`${urlJson}`, params);
  if (!req.ok) {
    throw new Error(`Could not fetch ${url}, status: ${req.status}`);
  }
  return await req.json();
}
function GetValues() {
  const birthdate = new Date(document.querySelector("#datebirth").value);
  const newObject = {
    gender: document.querySelector('input[name="gender"]:checked').value,
    full_name: document.querySelector("#name").value,
    city: document.querySelector("#town").value,
    country: document.querySelector("#country").value,
    email: document.querySelector("#email").value,
    b_day: document.querySelector("#datebirth").value,
    age: currentDate.getFullYear() - birthdate.getFullYear(),
    phone: document.querySelector("#phone").value,
    course: document.querySelector("#speciality").value,
    favorite: Math.random() < 0.5,
    bg_color: document.querySelector("#color").value,
    note: document.querySelector("#comments").value,
  };
  const validationError = checkValidation(newObject);
  if (validationError === true) {
    postReq(newObject);
    console.log(`Added!${arrayFromAPI.length}`);
    CleanCatalog(catalogTop);
    LoadCatalog(catalogTop, arrayFromAPI);
    alert("Користувача додано!");
  } else {
    notificateUser("Validation failed!", validationError.error, "warning");
  }
}
function checkFormRequirement() {
  event.preventDefault();
  if (document.querySelector('input[name="gender"]:checked') !== null) {
    GetValues();
  } else {
    notificateUser(
      "Registration failed!",
      "You do not choose a gender!",
      "warning"
    );
  }
}
/// Task 5
const form = document.getElementById("popup-form");
const popupOpen = document.querySelectorAll(".mainpopup-open");
const currentDate = new Date();
const formatCurrentDate = currentDate.toLocaleDateString("en-CA");
document.getElementById("datebirth").max = formatCurrentDate;
const params = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

form.addEventListener("submit", checkFormRequirement);

popupOpen.forEach((button) => {
  button.addEventListener("click", (event) => {
    popup.style.opacity = 1;
    popup.style.visibility = "visible";
    event.preventDefault();
  });
});
