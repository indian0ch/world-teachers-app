import { finalObject } from '../lab3.js';
import { CreateElement, CleanCatalog } from './topTeachers.js';
import { catalogFavourite, leftArrow, rightArrow,countFavouriteCards } from '../globalVariable.js';
import { arrayFromAPI } from '../Lab5/RequestToAPI.js';

export function makeArrayOnlyFavorite() {
  onlyFavorites = [];
  for (const obj of arrayFromAPI) {
    if (obj.favorite === true) {
      onlyFavorites.push(obj);
    }
  }
}
function getObjectForGenerate(array,direction) {
  //makeArrayOnlyFavorite();
  if(direction=="left"){
    return onlyFavorites[counter-1];
  }else{
    return onlyFavorites[counter+5];
  }
}
export function generateFavorite() {
  CleanCatalog(catalogFavourite);
  makeArrayOnlyFavorite();
  for (let i = 0; i < countFavouriteCards.length; i += 1) {
    catalogFavourite.insertBefore(CreateElement(onlyFavorites[i]), rightArrow);
  }
}
let onlyFavorites = [];
let counter=0;
/// Task Favoutite teachers
generateFavorite();
// event on arrows
leftArrow.addEventListener('click', () => {
  //makeArrayOnlyFavorite();
  if(counter!==0){
    const countElements = catalogFavourite.querySelectorAll('div.favoritecatalog>div',);
    catalogFavourite.children[countElements.length - 2].remove();
    console.log(onlyFavorites.length);
    console.log(counter);
    leftArrow.after(CreateElement(getObjectForGenerate(onlyFavorites,"left")));
    counter-=1;
  }
});
rightArrow.addEventListener('click', () => {
  makeArrayOnlyFavorite();
  if(counter!==onlyFavorites.length-5){
    catalogFavourite.children[1].remove();
    //catalogFavourite.children[countElements.length - 2].remove();
    rightArrow.before(CreateElement(getObjectForGenerate(onlyFavorites,"right")));
    counter++;
  }
});
