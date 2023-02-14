//input: arr , callback
//out: new array

//callback
//in: el, index, entriearr
//out: changed elem (any type)
const mapArrayElements = (arr, callback) => {
  const resultArr = [];
  for (let index = 0; index < arr.length; index++) {
    // console.log(arr[index], index);
    resultArr.push(callback(arr[index], index, arr));
  }
  return resultArr;
};

function callBackFunc(el, index, entrieArr) {
  return (el *= 2);
}
// testDATA;

const testArr = [2, 5, 856, 24, 7, 39]; // - > [2, 856, 24]
mapArrayElements(testArr, callBackFunc);
mapArrayElements(['Andrew', 'Jane', 'Ivan', 'Mortal'], el => el.toLowerCase().includes('an'));
//algo
// 0.create result arr
// 1.itterate arr - loop
// 2. call back for each el
// 3. if callback true - push
// 4.after itteration return res
