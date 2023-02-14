const numbersList1 = [1, 2, 3, 4, 5, 6, 7];
console.log('Arr BEFORE POP: ', numbersList1);
const popRes = numbersList1.pop();
console.log(popRes);
console.log('Arr after POP: ', numbersList1);
//input : none
//output : number

//

//
const numbersList2 = [1, 2, 3, 4, 5, 6, 7];
console.log('Arr BEFORE push: ', numbersList2);
const pushRes = numbersList2.push(100);
console.log(pushRes);
console.log('Arr after push: ', numbersList2);
//
//input : el (any type)
//output : number

//
const numbersList3 = [1, 2, 3, 4, 5, 6, 7];
console.log('Arr BEFORE unshift: ', numbersList3);
const unshiftRes = numbersList3.unshift(777);
console.log(unshiftRes);
console.log('Arr after unshift: ', numbersList3);
//
//input : el (any type)
//output : number

const anotherNumbersList = [5, 0, 8, 10, -4, 50, 200];

// function filterCallBack(el) {
//   return el > 5;
// }
// const filterRes = anotherList.filter(filterCallBack);
// console.log(filterRes);

const filterRes = anotherNumbersList.filter((el) => el > 100);
console.log(filterRes);
