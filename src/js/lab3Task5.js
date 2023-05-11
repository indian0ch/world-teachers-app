import { CreateElement,CleanCatalog } from './Lab4/topTeachers.js';
import {catalogTop} from './globalVariable.js';
export function SearchObject(arrayObject, valueInput) {
  CleanCatalog(catalogTop);
  for (const obj of arrayObject) {
    if (
      obj.full_name.split(' ')[0] === valueInput
      || obj.note === valueInput
      || obj.age == valueInput
    ) {
      CreateElement(obj, catalogTop);
    }
  }
}

// console.log(SearchObject(finalObject, 'gender','Male'));
