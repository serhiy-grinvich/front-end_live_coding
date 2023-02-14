/*
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */

//input : number, number, function
//out: undefined;
function sum(from, to, resolver) {
  let result = 0;
  for (let i = from; i <= to; i++) {
    result += i;
  }
  resolver(result);
}
//

//in: number
//out: undefined

//data tests

function printResult(res) {
  console.log(res);
}
sum(10, 15, printResult);
//
//
function alertResult(res) {
  alert(res);
}
sum(10, 15, alertResult);
//
