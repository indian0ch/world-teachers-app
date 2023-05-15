export function filterArray(arrayObjects, country, gender, favorite = true, photoStat = true, age1 = '1', age2 = '90') {
  const filterCondition = (obj) =>
    obj.age >= age1 && obj.age <= age2 &&
    (favorite ? obj.favorite === true : true) &&
    (photoStat ? obj.picture_thumbnail !== undefined : obj.picture_thumbnail === undefined);

  if (country === 'No' && gender === 'No') {
    return arrayObjects.filter(filterCondition);
  } else if (country === 'No') {
    return arrayObjects.filter((obj) =>
      obj.gender === gender &&
      filterCondition(obj)
    );
  } else if (gender === 'No') {
    return arrayObjects.filter((obj) =>
      obj.country === country &&
      filterCondition(obj)
    );
  }

  return arrayObjects.filter((obj) =>
    obj.country === country &&
    obj.gender === gender &&
    filterCondition(obj)
  );
}

