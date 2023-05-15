//import { finalObject } from '../lab3.js';
import { createElement, cleanCatalog } from "./topTeachers.js";
import {
  catalogFavourite,
  leftArrow,
  rightArrow,
  countFavouriteCards,
} from "../globalVariable.js";
import { arrayFromAPI } from "../Lab5/RequestToAPI.js";

export function makeArrayOnlyFavorite() {
  onlyFavorites = [];
  for (const obj of arrayFromAPI) {
    if (obj.favorite === true) {
      onlyFavorites.push(obj);
    }
  }
}
function getObjectForGenerate(array, direction) {
  //makeArrayOnlyFavorite();
  if (direction == "left") {
    return onlyFavorites[counter - 1];
  } else {
    return onlyFavorites[counter + 5];
  }
}
export function generateFavorite() {
  cleanCatalog(catalogFavourite);
  makeArrayOnlyFavorite();
  for (let i = 0; i < countFavouriteCards.length; i += 1) {
    catalogFavourite.insertBefore(createElement(onlyFavorites[i]), rightArrow);
  }
}
let onlyFavorites = [];
let counter = 0;
/// Task Favoutite teachers
generateFavorite();
// event on arrows
leftArrow.addEventListener("click", () => {
  // if (counter !== 0) {
  //   const countElements = catalogFavourite.querySelectorAll(
  //     "div.favoritecatalog>div"
  //   );
  //   const removingCard = catalogFavourite.children[countElements.length - 2];
  //   removingCard.classList.add("removing");
  //   setTimeout(() => {
  //     removingCard.remove();
  //     const newTeacherCard = createElement(
  //       getObjectForGenerate(onlyFavorites, "left")
  //     );
  //     newTeacherCard.style.opacity = 0;
  //     leftArrow.after(newTeacherCard);
  //     counter -= 1;
  //     setTimeout(() => {
  //       newTeacherCard.classList.add("appearing");
  //       newTeacherCard.style.opacity = 1;
  //     }, 100);
  //   }, 100);
  // }
  if (counter !== 0){
    renderFavorites("left");
  }
});
rightArrow.addEventListener("click", () => {
  makeArrayOnlyFavorite();
  if (counter !== onlyFavorites.length - 5) {
    // const removingCard = catalogFavourite.children[1];
    // removingCard.classList.add("removing");

    // setTimeout(() => {
    //   removingCard.remove();
    //   const newTeacherCard = createElement(
    //     getObjectForGenerate(onlyFavorites, "right")
    //   );
    //   newTeacherCard.style.opacity = 0;
    //   rightArrow.before(newTeacherCard);
    //   counter++;
    //   setTimeout(() => {
    //     newTeacherCard.classList.add("appearing");
    //     newTeacherCard.style.opacity = 1;
    //   }, 100);
    // }, 100);
    renderFavorites("right");
  }
});
function renderFavorites(direction){
  let removingCard;
  const countElements = catalogFavourite.querySelectorAll(
    "div.favoritecatalog>div"
  );
  direction=="left"?removingCard = catalogFavourite.children[countElements.length-2]:removingCard = catalogFavourite.children[1];
  removingCard.classList.add("removing");

  setTimeout(() => {
    removingCard.remove();
    const newTeacherCard = createElement(
      getObjectForGenerate(onlyFavorites, direction)
    );
    newTeacherCard.style.opacity = 0;
    direction=='left'?leftArrow.after(newTeacherCard):rightArrow.before(newTeacherCard);
    direction=='left'?counter--:counter++;
    setTimeout(() => {
      newTeacherCard.classList.add("appearing");
      newTeacherCard.style.opacity = 1;
    }, 50);
  }, 70);
}
