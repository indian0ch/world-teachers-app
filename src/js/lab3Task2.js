function startsWithUpperCase(str) {
  return _.startsWith(str, _.upperCase(_.head(str)));
}

function containsScriptTags(arr) {
  return _.some(arr, (item) => _.includes(item, '<script>'));
}

export function checkValidation(obj) {
  const { full_name, gender, country, note, b_day, city, age, phone, email } = obj;

  if (_.every([full_name, gender, country, note, b_day], _.isString) && _.isNumber(age)) {
    if (_.every([full_name, gender, note, city], startsWithUpperCase) && !containsScriptTags([full_name, note, city])) {
      if (_.isMatch(phone, /^\+38-\d{10}$/) && _.includes(email, '@')) {
        return true;
      } else if (!_.isMatch(phone, /^\+38-\d{10}$/)) {
        return { error: 'Phone number is invalid. Should be in the format +38-0000000000.' };
      } else {
        return { error: 'Email is invalid.' };
      }
    } else {
      return { error: 'Note, name, city fields should start with an uppercase letter.' };
    }
  } else {
    return { error: 'Check if Name, gender, note, city, and age are defined correctly.' };
  }
}


