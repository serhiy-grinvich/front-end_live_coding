'use strict';
// // good / tatiana
// function compareObjects(firstObj, secondObj) {
//   return Object.keys({ ...firstObj, ...secondObj }).every(key => firstObj[key] === secondObj[key]);
// }

// // norm / sasha
// function compareObjects(firstObj, secondObj) {
//   return !Object.keys({ ...firstObj, ...secondObj }).some(key => firstObj[key] !== secondObj[key]);
// }

// // bad / sasha
// function compareObjects(firstObj, secondObj) {
//   const biggerObj =
//     JSON.stringify(firstObj).length > JSON.stringify(secondObj).length ? firstObj : secondObj;
//   return !Object.keys(biggerObj).some(key => firstObj[key] !== secondObj[key]);
// }

// // norm / victor
// const compareObjects = (firstObj, secondObj) => {
//   const firstArr = Object.keys(firstObj);
//   if (firstArr.length !== Object.keys(secondObj).length) {
//     return false;
//   }
//   return !firstArr.some(key => firstObj[key] !== secondObj[key]);
// };

// // victor / bad but intresting
// const compareObjects2 = (firstObj, secondObj) =>
//   JSON.stringify(Object.entries(firstObj).sort()) ===
//   JSON.stringify(Object.entries(secondObj).sort());

//   // bad / anna
//   function compareObjects(firstObj, secondObj) {
//   const firstArray = Object.keys(firstObj);
//   if (firstArray.length !== Object.keys(secondObj).length) {
//     return false;
//   }
//   return firstArray.reduce((acc, element) => {
//     if (firstObj[element] !== secondObj[element]) {
//       acc = false;
//     };
//     return acc;
//   }, true);
// };
// // taras / very bad
// const compareObjects = (firstObj, secondObj) =>
//   Object.keys(firstObj).reduce(
//     (acc, key, index) => (firstObj[key] === secondObj[key] && index === acc ? acc + 1 : -1),
//     0,
//   ) === Object.keys(secondObj).length;

// // andry / bad
// function compareObjects(firstObj, secondObj) {
//   const ordered = obj =>
//     Object.keys(obj)
//       .sort()
//       .reduce((acc, el) => {
//         acc[el] = obj[el];
//         console.log(acc);
//         return acc;
//       }, {});
//   const sortFirstObj = ordered(firstObj);
//   const sortSecondObj = ordered(secondObj);
//   return JSON.stringify(sortFirstObj) === JSON.stringify(sortSecondObj);
// }

// algo
// get arrays from objects
// compare result array length
// compare keys values

/**
 * @param {object} firstObj
 * @param {object} secondObj
 * @return {boolean}
 */
// refactored:
function compareObjects(firstObj, secondObj) {
  const firstArr = Object.keys(firstObj);
  const secondArr = Object.keys(secondObj);
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  return firstArr.every(key => {
    return firstObj[key] === secondObj[key];
  });
}

// testData
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Tom',
};

compareObjects(obj1, obj2); // ==> false
compareObjects(obj2, obj3); // ==> false
compareObjects(obj1, obj4); // ==> true
compareObjects(obj4, obj5); // ==> true
