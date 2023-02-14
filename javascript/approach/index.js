// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution
/**
 * @param {number} num
 * @return {undefined}
 */

//algo:
// 1.itarate 1 ... num  ++
// 2.check if prime
// 2.0 create counter ++
// 2.1 iterate 1...num ++
// 2.2 if number % index == 0 -> count += 1/ ++
// 2.3 if counter ===2  - prime ++
// 3. console if prime. +++
function isPrime(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count += 1;
    }
  }
  return count === 2;
}
function getPrimes(num) {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

//
//test data
getPrimes(10); // ==> 2 3 5 7
getPrimes(15); // ==> 2 3  5 7 11 13

// loop inside loop

// function getPrimes(num) {
//   console.log('NUM : ', num);
//   for (let number = 2; number <= num; number++) {
//     let counter = 0;
//     for (let i = 1; i <= number; i++) {
//       if (number % i === 0) counter += 1;
//     }
//     if (counter === 2) console.log(number);
//   }
// }
