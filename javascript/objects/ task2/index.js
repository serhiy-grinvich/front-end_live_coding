'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
// function buildObject(keysList, valuesList) {
//   // put you code here
// }

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }

// algo
// create obj
// itterate keyList
// add key/value to obj
// return obj

//DRAFT
// function buildObject(keysList, valuesList) {
//   const resultObj = {};
//   for (let i = 0; i < keysList.length; i++) {
//     resultObj[keysList[i]] = valuesList[i];
//   }
//   return resultObj;
// }

function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, current, index) => ({ ...obj, [current]: valuesList[index] }), {});
}
