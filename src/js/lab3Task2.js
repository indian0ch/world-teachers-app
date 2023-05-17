function isString(variable) {
  return typeof variable === 'string';
}
function startsWithUpperCase(variable) {
  return variable.charAt(0) === variable.charAt(0).toUpperCase();
}

export function checkValidation(obj) {
  if (obj.full_name !== '' && obj.gender !== '' && obj.country !== '' && obj.note !== '' && obj.b_day !== '') {
    if (isString(obj.full_name) && isString(obj.gender) && isString(obj.note) && isString(obj.city)) {
      if (!obj.full_name.includes('<script>') && !obj.note.includes('<script>') && !obj.city.includes('<script>')) {
        if (startsWithUpperCase(obj.full_name) && startsWithUpperCase(obj.gender) && startsWithUpperCase(obj.note) && startsWithUpperCase(obj.city)) {
          if (typeof obj.age === 'number') {
            if (obj.phone.match(/^\+38-\d{10}$/)) {
              if (obj.email.indexOf('@') !== -1) {
                return true;
              }
              return { error: 'Email is invalid.' };
            }
            return { error: 'Phone number is invalid. Should be at format +38-0000000000' };
          }
          return { error: 'Age is not a number.' };
        }
        return { error: 'Note, name, city fields should start with an uppercase letter.' };
      }
      return { error: 'Do not try input scripts into fields!' };
    }
    return { error: 'Check, if Name, city, email is string fields.' };
  }
  return { error: 'You have underfined fields!' };
}
