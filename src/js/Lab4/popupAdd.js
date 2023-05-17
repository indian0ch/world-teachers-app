import { checkValidation } from "../lab3Task2.js";
import { catalogTop, urlJson } from "../globalVariable.js";

function notificateUser(messageTitle, messageBody, status = "warning") {
  swal(messageTitle, messageBody, status, {
    button: "OK",
  });
}
function getValues() {
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
  } else {
    notificateUser("Validation failed!", validationError.error, "warning");
  }
}
function checkFormRequirement(event) {
  event.preventDefault();
  if (document.querySelector('input[name="gender"]:checked') !== null) {
    getValues();
  } else {
    notificateUser(
      "Registration failed!",
      "You do not choose a gender!",
      "warning"
    );
  }
}
function postReq(obj) {
  try {
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };
     fetch(`${urlJson}`, params)
     .then(notificateUser("Complete!", "User was added!", "success"));
  } catch (error) {
    console.error(`An error occurred while making the request: ${error}`);
    notificateUser("Request Failed!", error.message, "error");
  }
}
/// Task 5
const form = document.getElementById("popup-form");
const popupOpen = document.querySelectorAll(".mainpopup-open");
const currentDate = new Date();
const formatCurrentDate = currentDate.toLocaleDateString("en-CA");

document.getElementById("datebirth").max = formatCurrentDate;
form.addEventListener("submit", (event) => checkFormRequirement(event));
popupOpen.forEach((button) => {
  button.addEventListener("click", (event) => {
    popup.style.opacity = 1;
    popup.style.visibility = "visible";
    event.preventDefault();
  });
});
