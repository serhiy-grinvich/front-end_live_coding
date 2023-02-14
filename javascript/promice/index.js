const formElem = document.querySelector('.login-form');

const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

function createUserHandler(event) {
  event.preventDefault();

  // read form

  const user = {
    email: 'test@gmail.com',
    name: 'Vasiliy',
    password: 'qwerty',
  };

  let res = fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user), //string in JSON
  })
    .then(res => {
      //in callback resolved, callback reject

      return res.json();
    })
    .then(body => console.log(body));

  console.log(res);
}

// in = url, params obj
// out = promise

// save to DB

formElem.addEventListener('submit', createUserHandler);
