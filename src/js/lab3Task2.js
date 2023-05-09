function isString(variable) {
  return typeof variable === 'string';
}
function startsWithUpperCase(variable) {
  return variable.charAt(0) === variable.charAt(0).toUpperCase();
}

export function checkValidation(obj) {
  if (obj.full_name !== '' && obj.gender !== '' && obj.country !== '' && obj.note !== '' && obj.b_day !== '') {
    if (isString(obj.full_name) && isString(obj.gender) && isString(obj.note) && isString(obj.city) && isString(obj.city)) {
      if (startsWithUpperCase(obj.full_name) && startsWithUpperCase(obj.gender) && startsWithUpperCase(obj.note) && startsWithUpperCase(obj.city) && startsWithUpperCase(obj.country)) {
        if (typeof obj.age === 'number') {
          if (obj.phone.match(/^\+38-\d{10}$/)) {
            if (obj.email.indexOf('@') !== -1) {
              return true;
            } else {
              return { error: 'Email is invalid.' };
            }
          } else {
            return { error: 'Phone number is invalid. Should be at format +38-0393200220' };
          }
        } else {
          return { error: 'Age is not a number.' };
        }
      } else {
        return { error: 'Note, name, city fields should start with an uppercase letter.' };
      }
    } else {
      return { error: 'Some fields are not strings.' };
    }
  } else {
    return { error: 'Some fields are null.' };
  }
}

