export function FilterArray(arrayObjects, country, age1 = '18', gender, favorite = true, age2 = '60', photoStat = true) {
  if (photoStat == false) {
    if(country=='No'&&gender=='No'){
      console.log('1')
      return arrayObjects.filter((obj) =>  obj.age >= age1 && obj.age <= age2
      && obj.favorite === favorite
      && obj.picture_thumbnail === undefined);
    }
    else if(country=='No'){
      console.log('2')
      return arrayObjects.filter((obj) =>  obj.age >= age1 && obj.age <= age2
      && obj.favorite === favorite
      && obj.gender === gender
      && obj.picture_thumbnail === undefined);
    }
    else if(gender=='No'){
      console.log('3')
      return arrayObjects.filter((obj) =>  obj.age >= age1 && obj.age <= age2
      && obj.favorite === favorite
      && obj.country === country
      && obj.picture_thumbnail === undefined);
    }
  }
  else {
    if(country=='No'&&gender=='No'){
      console.log('1')
      return arrayObjects.filter((obj) =>  obj.age >= age1 && obj.age <= age2
      && obj.favorite === favorite
      && obj.picture_thumbnail !== undefined);
    }
    else if(country=='No'){
      console.log('2')
      return arrayObjects.filter((obj) =>  obj.age >= age1 && obj.age <= age2
      && obj.favorite === favorite
      && obj.gender === gender
      && obj.picture_thumbnail !== undefined);
    }
    else if(gender=='No'){
      console.log('3')
      return arrayObjects.filter((obj) =>  obj.age >= age1 && obj.age <= age2
      && obj.favorite === favorite
      && obj.country === country
      && obj.picture_thumbnail !== undefined);
    }
  }
}
