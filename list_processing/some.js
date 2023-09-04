// Write a function to simulate 'Array.prototype.some()'

function myOwnSome(array, func) {
  for (let idx = 0; idx < array.length; idx += 1) {
    if (idx in array && func(array[idx])) return true;
  }

  return false;
}

let isAString = value => typeof value === 'string';
let isUndefined = value => typeof value === 'undefined';

console.log(myOwnSome([1, 2, 3], isAString)); // false
console.log(myOwnSome([1, , 2, 3], isAString)); // false
console.log(myOwnSome([1, 2, 'string'], isAString)); // true
console.log(myOwnSome([1, , 2, 'string'], isAString)); // true
console.log(myOwnSome([1, 2, 'string', undefined], isUndefined)); // true
console.log(myOwnSome([1, , 2, 'string', undefined], isUndefined)); // true
console.log(myOwnSome([1, , 2, 'string'], isUndefined)); // false
console.log(myOwnSome([1, 2, 'string'], isUndefined)); // false

