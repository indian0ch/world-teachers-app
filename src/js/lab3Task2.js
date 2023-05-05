import { finalObject } from './lab3.js';
/// Task 2///
export function checkValidation(obj) {
  if (isString(obj.full_name) && isString(obj.gender) && isString(obj.note) && isString(obj.city) && isString(obj.country)) if (startsWithUpperCase(obj.full_name) && startsWithUpperCase(obj.gender) && startsWithUpperCase(obj.note) && startsWithUpperCase(obj.city) && startsWithUpperCase(obj.country)) if (typeof obj.age === 'number') if (obj.phone.match(/^\+38-\d{10}$/)) if (obj.email.indexOf('@') !== -1) return true;

  return false;
}
function isString(variable) {
  return typeof variable === 'string';
}
function startsWithUpperCase(variable) {
  return variable.charAt(0) === variable.charAt(0).toUpperCase();
}

console.log(checkValidation(finalObject[0]));
