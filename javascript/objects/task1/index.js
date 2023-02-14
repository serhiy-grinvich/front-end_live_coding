/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// put your code here

// put your code here

// put your code here

// examples
const transaction = {
  value: 170,
};
// addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }

// create obj
// read obj
// modify = add / update / mapping

// input : obj, string , any type
// out: obj
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  // input: target obj, obj...objN
  // output: object
  return Object.assign(obj, { [key]: value });
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

// testdata
const obj1 = { name: 'Dyadya', lastName: 'Fedor' };
addPropertyV1(obj1, 'age', 18);
addPropertyV1(obj1, 'name', 'matroskin');
addPropertyV2(obj1, 'name', 'petya');
