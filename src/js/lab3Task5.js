import { createElement, cleanCatalog } from './Lab4/topTeachers.js';
import { catalogTop } from './globalVariable.js';

export function searchObject(arrayObject, valueInput) {
  cleanCatalog(catalogTop);
  for (const obj of arrayObject) {
    if (
      obj.full_name.split(' ')[0] === valueInput
      || obj.note === valueInput
      || obj.age == valueInput
    ) {
      createElement(obj, catalogTop);
    }
  }
}
