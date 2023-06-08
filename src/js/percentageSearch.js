export function percentageSearch(arrayObject, parametr, value, range = 'greater') {
  let count = 0;
  if (parametr !== 'b_day' && parametr !== 'age') {
    for (const obj of arrayObject) {
      if (obj[parametr] === value) {
        count += 1;
      }
    }
  } else {
    for (const obj of arrayObject) {
      if (range === 'greater') {
        if (obj[parametr] >= value) {
          count += 1;
        }
      } else if (obj[parametr] < value) {
        count += 1;
      }
    }
  }
  return (count / arrayObject.length) * 100;
}
