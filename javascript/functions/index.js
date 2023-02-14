console.log('Hello, JS');
function getSenseOfLife() {
  return 42;
}
// 1
const res = getSenseOfLife();
console.log(res);
//   2
console.log(getSenseOfLife());
// func 2
function getSquared(x) {
  return x ** 2;
}
//test data

console.log(getSquared(5));
console.log(getSquared(-1));
console.log();
console.log(getSquared(getSenseOfLife()));
//
function sum(a, b) {
  return a + b;
}
//test data
console.log(sum(5, 9));
console.log(sum(5, 354));
console.log(sum(4, 3));

///
function getMessage(age) {
  if (age < 0 || typeof age !== 'number') {
    return null;
  }
  return `I am ${age} years old`;
}
console.log(getMessage(15));
console.log(getMessage(67));
console.log(getMessage('died'));
console.log(getMessage(-6));
////
const mult = (a, b) => a * b;
console.log(mult(5, 9));
console.log(mult(5, 354));
console.log(mult(4, 3));

///
const getMagicNumber = () => 17;
console.log(getMagicNumber());
