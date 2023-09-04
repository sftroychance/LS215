// Write a function named myReduce that's similar to the Array.prototype.reduce method. It takes an array and a function as arguments, and optionally, a third argument that serves as an initial value. If the caller omits the initial value, myReduce should use the first element of the Array as the initial value. myReduce should return the value returned by the last invocation of the callback function.

function myReduce(array, func, initial) {
  // Array.prototype.reduce() throws a TypeError if the array is empty and there is no initial value
  if (array.length === 0 && initial === undefined) {
    throw new TypeError('Empty array and no initial value');
  }

  let result = initial ?? array[0];
  let startIndex = result === initial ? 0 : 1;

  for (let idx = startIndex; idx < array.length; idx += 1) {
    // an empty slot will have a value of 'undefined', which will result in NaN for any
    // arithmetic operation, so this simulates skipping the empty slot
    if (idx in array) result = func(result, array[idx], idx, array);
  }

  // LS solution:
  // array.slice(startIndex).forEach(element => value = func(value, element));

  return result;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, , 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49
console.log(myReduce([5, , 12, 15, 1, 6], sum, 10));            // 49
console.log(myReduce([], sum, 10));            //
// console.log(myReduce([], sum));            // throws error - empty array and no initial value
// TypeError is the result with Array.prototype.reduce() in this instance

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"
