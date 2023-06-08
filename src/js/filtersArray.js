export function filterArray(arrayObjects, country, gender, favorite = true, photoStat = true, age1 = '1', age2 = '90') {
  const filterCondition = (obj) => obj.age >= age1 && obj.age <= age2
    && (favorite ? obj.favorite === true : true)
    && (photoStat ? obj.picture_thumbnail !== undefined : obj.picture_thumbnail === undefined);

  return _.filter(arrayObjects, (obj) => {
    if (country === 'No' && gender === 'No') {
      return filterCondition(obj);
    }
    if (country === 'No') {
      return obj.gender === gender && filterCondition(obj);
    }
    if (gender === 'No') {
      return obj.country === country && filterCondition(obj);
    }
    return obj.country === country && obj.gender === gender && filterCondition(obj);
  });
}
