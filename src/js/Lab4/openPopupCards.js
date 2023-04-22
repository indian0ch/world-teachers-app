import  {finalObject} from "../lab3.js";
import  {catalogTop,LoadTopCatalog} from "../Lab4/topTeachers.js";
import  {catalogFavourite,GenerateFavorite} from "../Lab4/favouriteTeachers.js";
//Task1 Пункт: Функціональність відкриття поп апу для карток
const popup = document.getElementById('popupinfo');
const popupinfo_form=document.querySelector('.popupinfo-form');
const popupClose=document.querySelectorAll('.popup-close');
const allCatalogs =[catalogTop, catalogFavourite];

allCatalogs.forEach(catalog=>{
  catalog.addEventListener('click', event => {
    const clickedElement = event.target;
    const clickedCard=clickedElement.parentNode.parentNode;
    if (clickedElement.parentNode.classList.contains('image')){
      let pibElement = clickedCard.querySelector('.pib').textContent.trim();//fixed
      for(let obj of finalObject){
        if(obj.full_name === pibElement){
          popupinfo_form.innerHTML='';
          let personalinfo = document.createElement("div");
          personalinfo.className="popupinfo-personalinfo";
          let personalinfodiv_image = document.createElement("div");
          personalinfodiv_image.className="personalinfo-image";
          let personalinfo_data = document.createElement("div");
          personalinfo_data.className="personalinfo-info";
          personalinfo_data.innerHTML=`              
          <p id="info-surname">${obj.full_name}</p>
          <p id="info-sub">${obj.course}</p>
          <p id="info-location">${obj.city},${obj.country}</p>
          <p>${obj.age}, ${obj.gender}</p>
          <p id="info-email">${obj.email}</p>
          <p id="info-phone">${obj.phone}</p>`;
          personalinfodiv_image.innerHTML=`<img src="${obj.picture_thumbnail}" alt="">`;
          personalinfo.appendChild(personalinfodiv_image);
          personalinfo.appendChild(personalinfo_data);
          //block with a star
          let popupinfostardiv= document.createElement("div");
          popupinfostardiv.className="star1";
          let popupinfostar= document.createElement("img");
          popupinfostar.id='popupStar';
          if(obj.favorite===true){
            popupinfostar.src='images/star.png';
          }
          else{
            popupinfostar.src='images/empty-star-.png';
          }
          // add event listener to img element
          popupinfostar.addEventListener('click', function() {
            let note_popup=document.querySelector(".popupinfo-notation");
            if (popupinfostar.src.includes('empty-star')) {
                 popupinfostar.src = 'images/star.png';
                 for(let obj of finalObject){
                  if(obj.note===note_popup.textContent.trim()){
                   obj.favorite=true;
                  }
                }
            } else {
              popupinfostar.src = 'images/empty-star-.png';
              for(let obj of finalObject){
                if(obj.note===note_popup.textContent.trim()){
                 obj.favorite=false;
                }
              }
            }
            LoadTopCatalog(catalogTop);
            GenerateFavorite();
          });
          popupinfostardiv.appendChild(popupinfostar);
          personalinfo.appendChild(popupinfostardiv);
          //block with description
          let description=document.createElement("div");
          description.className="popupinfo-description";
          description.innerHTML=`            
          <div class="popupinfo-notation">
            <p>${obj.note}</p>
          </div>
          <div class="popupinfo-map">
            <a href="">toggle map</a>
          </div>`;
          popupinfo_form.appendChild(personalinfo);
          popupinfo_form.appendChild(description);
          popup.style.opacity = 1;
          popup.style.visibility = 'visible';
        }
      }
    }
  })});
//Close popup functional
popupClose.forEach(button=>{
    button.addEventListener('click',event=>{
      popup.style.opacity = 0;
      popup.style.visibility = 'hidden';
      event.preventDefault();
    })
});
