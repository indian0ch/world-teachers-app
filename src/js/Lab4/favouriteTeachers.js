import  {finalObject} from "../lab3.js";
import  {catalogTop,CreateElement,CleanCatalog} from "../Lab4/topTeachers.js";
export const catalogFavourite = document.querySelector(".favoritecatalog");
export const leftArrow=document.getElementById("leftarrow");
export const rightArrow=document.getElementById("rightarrow");
///Task 1
let onlyFavorites=[];
function MakeArrayOnlyFavorite(){
  onlyFavorites=[];
  for(let obj of finalObject){
    if(obj.favorite==true){
      onlyFavorites.push(obj);
    }
  }
}
///Favoutite teachers
const countFavouriteCards = catalogFavourite.querySelectorAll(".teachercard");
CleanCatalog(catalogFavourite);
GenerateFavorite()
export function GenerateFavorite(){
  CleanCatalog(catalogFavourite);
  MakeArrayOnlyFavorite();
  for(let i=0;i<countFavouriteCards.length;i++){
    catalogFavourite.insertBefore(CreateElement(onlyFavorites[i]),rightArrow);
  }
  console.log('edede');
}
//event on arrows
leftArrow.addEventListener('click',event=>{
  catalogFavourite.children[1].remove();
  rightArrow.before(CreateElement(GetRandomObject(onlyFavorites)));
});
rightArrow.addEventListener('click',event=>{
  let countElements = catalogFavourite.querySelectorAll('div.favoritecatalog>div');
  catalogFavourite.children[countElements.length-2].remove();
  leftArrow.after(CreateElement(GetRandomObject(onlyFavorites)));
});
function GetRandomObject(array){
  let randomI = Math.floor(Math.random() * array.length);
  return array[randomI];
}

