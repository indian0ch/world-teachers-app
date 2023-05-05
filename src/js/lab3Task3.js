export function FilterArray(arrayObjects, country = 'Germany', age1 = '18', gender = 'Male', favorite = 'false', age2 = '60', photoStat = true) {
  if (photoStat == false) {
    return arrayObjects.filter((obj) => obj.country === country
        && obj.age >= age1 && obj.age <= age2
        && obj.gender === gender
        && obj.favorite === favorite
        && obj.picture_thumbnail === undefined);
  }

  return arrayObjects.filter((obj) => obj.country === country
            && obj.age >= age1 && obj.age <= age2
            && obj.gender === gender
            && obj.favorite === favorite
            && obj.picture_thumbnail !== undefined);
}
