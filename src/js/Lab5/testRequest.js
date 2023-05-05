/*
let request = new Request({
    url: 'https://randomuser.me/api',
    method: 'GET'
  });
  */
let usersArray = [];
const url = 'https://randomuser.me/api/';
const params = {
  results: 50,
};
const getUsers = () => {
  fetch(`${url}?results= 50`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((responseData) => {
      usersArray = responseData.results;
      console.log(usersArray);
      //
      return usersArray;
    })
    .catch((error) => {
      console.error(error);
    });
};
console.log(usersArray[2]);
// const array = await getUsers();
