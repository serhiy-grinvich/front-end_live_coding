// global lex env
//
// {
//   "envRecord": {message: test,
//  weigth 55,
//  run: f(),
//  }
//
// "outer" : null

// run lex even
// {
//     envRec : {

//     }
//     outer : global lex env
// }

/* eslint-disable */

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

if (weight) {
  console.log('my weigth:' + weight);
}

const messanger = createMessenger();

messanger.sendMessage('jack');
run();

// ====

function counter() {
  let counter = 0;
  return () => {
    counter++;
  };
}
