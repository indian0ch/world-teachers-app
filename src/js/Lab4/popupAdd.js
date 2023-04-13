import  {finalObject} from "../lab3.js";
///Task 5
let form = document.getElementById("popup-form");
form.addEventListener('submit', GetValues);

function GetValues(event){
    event.preventDefault();
    const full_name = document.querySelector('#name').value;
    const course = document.querySelector('#speciality').value;
    const country = document.querySelector('#country').value;
    const city = document.querySelector('#town').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const b_day = document.querySelector('#datebirth').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const bg_color = document.querySelector('#color').value;
    const note = document.querySelector('#comments').value;
    const newObject = {
        gender,
        full_name,
        city,
        country,
        email,
        b_day,
        phone,
        course,
        bg_color,
        note
      };
      finalObject.push(newObject); 
}
