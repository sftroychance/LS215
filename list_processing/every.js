// Write a function named myOwnEvery that's similar to the Array.prototype.every method. It should take an array and a function as arguments, and return true if every element passed to the function evaluates as truthy.

function myOwnEvery(array, func) {
  for (let idx = 0; idx < array.length; idx += 1) {
    if ( idx in array && !func(array[idx])) return false;
  }

  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', , 'a234', '1abc'], isAString));       // true
console.log(myOwnEvery([1, 'a', 'a234', '1abc'], isAString));       // false

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, , 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false
