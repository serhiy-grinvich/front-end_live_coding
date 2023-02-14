const getCustomersList = obj => {
  return Object.entries(obj)
    .map(([key, value]) => ({ ...value, id: key }))
    .sort((a, b) => a.age - b.age);
  // return Object.entries(obj)
  //   .reduce((result, current) => {
  //     result.push({ ...current[1], id: current[0] });
  //     return result;
  //   }, [])
  //   .sort((a, b) => a.age - b.age);
};
// put your code here
// const resArr = [];
// const entries = Object.entries(obj);
// for (let index = 0; index < entries.length; index++) {
//   resArr.push({ ...entries[index][1], id: entries[index][0] });
// }
// console.log(resArr);

// algo
// create res arr
// get keys&values
// add key to value
// push to arr
// sort by age
//data tests :
// const custList = {
//   'customer#1': {
//     name: 'vasya',
//     age: 34,
//   },
//   'customer#2': {
//     name: 'alina',
//     age: 15,
//   },
//   'customer#3': {
//     name: 'kirill',
//     age: 78,
//   },
//   'customer#4': {
//     name: 'tatiana',
//     age: 50,
//   },
// };
