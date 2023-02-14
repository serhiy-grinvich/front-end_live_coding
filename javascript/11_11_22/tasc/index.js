//input: arr , callback
//out: filtered array

//callback
//in: el, index, entriearr
//out: boolean
const filterArrayElements = (arr, callback) => {
  const resultArr = [];
  for (let index = 0; index < arr.length; index++) {
    // console.log(arr[index], index);
    if (callback(arr[index], index, arr)) resultArr.push(arr[index]);
  }
  return resultArr;
};

// function callBackFunc(el, index, entrieArr) {
//   if (el % 2 === 0) return true;
//   return false;
// }
// testDATA

// const testArr = [2, 5, 856, 24, 7, 39]; // - > [2, 856, 24]
// filterArrayElements(testArr, callBackFunc);
// filterArrayElements(['Andrew', 'Jane', 'Ivan', 'Mortal'], el => el.toLowerCase().includes('an'));
//algo
// 0.create result arr
// 1.itterate arr - loop
// 2. call back for each el
// 3. if callback true - push
// 4.after itteration return res
