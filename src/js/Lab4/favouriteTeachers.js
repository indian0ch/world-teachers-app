import { finalObject } from '../lab3.js';
import { CreateElement, CleanCatalog } from './topTeachers.js';
import { catalogFavourite, leftArrow, rightArrow } from '../globalVariable.js';
import { arrayFromAPI } from '../Lab5/RequestToAPI.js';

function MakeArrayOnlyFavorite() {
  onlyFavorites = [];
  for (const obj of arrayFromAPI) {
    if (obj.favorite === true) {
      onlyFavorites.push(obj);
    }
  }
}
function GetRandomObject(array) {
  const randomI = Math.floor(Math.random() * array.length);
  return array[randomI];
}
export function GenerateFavorite() {
  CleanCatalog(catalogFavourite);
  MakeArrayOnlyFavorite();
  for (let i = 0; i < countFavouriteCards.length; i += 1) {
    catalogFavourite.insertBefore(CreateElement(onlyFavorites[i]), rightArrow);
  }
}
let onlyFavorites = [];
const countFavouriteCards = catalogFavourite.querySelectorAll('.teachercard');
/// Task Favoutite teachers
CleanCatalog(catalogFavourite);
GenerateFavorite();
// event on arrows
leftArrow.addEventListener('click', () => {
  catalogFavourite.children[1].remove();
  rightArrow.before(CreateElement(GetRandomObject(onlyFavorites)));
});
rightArrow.addEventListener('click', () => {
  const countElements = catalogFavourite.querySelectorAll(
    'div.favoritecatalog>div',
  );
  catalogFavourite.children[countElements.length - 2].remove();
  leftArrow.after(CreateElement(GetRandomObject(onlyFavorites)));
});
