import  {finalObject} from "../lab3.js";
import  {catalogTop,CleanCatalog,LoadCatalog} from "../Lab4/topTeachers.js";

///Task 5
let form = document.getElementById("popup-form");
const popupOpen=document.querySelectorAll('.mainpopup-open');
form.addEventListener('submit', GetValues);

function GetValues(event){
    event.preventDefault();
    const newObject = {
        gender:document.querySelector('input[name="gender"]:checked').value,
        full_name:document.querySelector('#name').value,
        city:document.querySelector('#town').value,
        country:document.querySelector('#country').value,
        email:document.querySelector('#email').value,
        b_day:document.querySelector('#datebirth').value,
        phone:document.querySelector('#phone').value,
        course:document.querySelector('#speciality').value,
        favorite:Math.random() < 0.5,
        bg_color:document.querySelector('#color').value,
        note:document.querySelector('#comments').value
      };
      finalObject.push(newObject); 
      console.log('Added!'+finalObject.length);
      CleanCatalog(catalogTop);
      LoadCatalog(catalogTop);
}
popupOpen.forEach(button=>{
  button.addEventListener('click',event=>{
    popup.style.opacity = 1;
    popup.style.visibility = 'visible';
    event.preventDefault();
  })
});