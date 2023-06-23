// import { finalObject } from '../lab3.js';
import { createElement, cleanCatalog } from './topTeachers.js';
import {
  catalogFavourite,
  leftArrow,
  rightArrow,
  countFavouriteCards,
} from '../globalVariable.js';
import { arrayFromAPI } from '../RequestToAPI.js';

export function makeArrayOnlyFavorite() {
  onlyFavorites = [];
  for (const obj of arrayFromAPI) {
    if (obj.favorite === true) {
      onlyFavorites.push(obj);
    }
  }
}
export function generateFavorite() {
  cleanCatalog(catalogFavourite);
  makeArrayOnlyFavorite();
  for (let i = 0; i < countFavouriteCards.length; i += 1) {
    catalogFavourite.insertBefore(createElement(onlyFavorites[i]), rightArrow);
  }
}

function renderFavorites(direction) {
  let removingCard;
  const countElements = catalogFavourite.querySelectorAll(
    'div.favoritecatalog>div',
  );
  direction == 'left' ? removingCard = catalogFavourite.children[countElements.length - 2] : removingCard = catalogFavourite.children[1];
  removingCard.classList.add('removing');

  setTimeout(() => {
    removingCard.remove();
    const newTeacherCard = createElement(
      getObjectForGenerate(onlyFavorites, direction),
    );
    newTeacherCard.style.opacity = 0;
    direction == 'left' ? leftArrow.after(newTeacherCard) : rightArrow.before(newTeacherCard);
    direction == 'left' ? counter-- : counter++;
    setTimeout(() => {
      newTeacherCard.classList.add('appearing');
      newTeacherCard.style.opacity = 1;
    }, 50);
  }, 70);
}
function getObjectForGenerate(array, direction) {
  // makeArrayOnlyFavorite();
  if (direction == 'left') {
    return array[counter - 1];
  }
  return array[counter + 5];
}
/// Task Favoutite teachers
let onlyFavorites = [];
let counter = 0;

generateFavorite();
leftArrow.addEventListener('click', () => {
  if (counter !== 0) {
    renderFavorites('left');
  }
});
rightArrow.addEventListener('click', () => {
  makeArrayOnlyFavorite();
  if (counter !== onlyFavorites.length - 5) {
    renderFavorites('right');
  }
});
