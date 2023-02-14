const numbersList = [5, 500, 0, 8, 10, -4, 50, 220];

//input: callback func, context
//output: array

//callbck input: number, index, array
//output: new elem
const mapRes = numbersList.map(el => (el > 0 ? el * el : el));
console.log(mapRes);

// find

//input:  callback
//Output: anytype  /  undefined

//callback in: el, index, array
//output: boolean
findRes = numbersList.find(el => el > 100);
console.log(findRes);

//forEach

//in: callback
//out: undefined
numbersList.forEach(el => {
  if (el > 0) console.log(el);
  //wrong using
  // el > 0 ? console.log(el) : console.log('error');

  //correct
  // console.log(el > 0 ? el : 'error');
});

//call  in: el
//out: undefined

//reduce
//input: callback, startValue
//output: anytype
const transactions = [5, 0, 8, -50, -100, 10, -4, 50, 220, 1203, 556, 41];
const reduceRes = transactions.reduce((acc, value) => {
  console.log('acc:', acc);
  console.log('value:', value);
  if (value < 0) {
    acc += value;
  }
  return acc;
}, 0);

//call in: acc, curent value, index, array
//out: resAcc any type

//sort
//input: callback
//
