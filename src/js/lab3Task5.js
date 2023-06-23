import { createElement, cleanCatalog } from './functional-adjust/topTeachers.js';
import { catalogTop } from './globalVariable.js';

export function searchObject(arrayObject, valueInput) {
  cleanCatalog(catalogTop);
  for (const obj of arrayObject) {
    const firstName = _.split(obj.full_name, ' ')[0];
    if (
      firstName === valueInput
      || obj.note === valueInput
      || obj.age == valueInput
    ) {
      createElement(obj, catalogTop);
    }
  }
}
