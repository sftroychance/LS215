// Write a function that's similar to Array.prototype.filter. It takes an array and a function as arguments, and returns an array whose values are only those that the function passed returns as true.

function myFilter(array, func) {
  let resultArray = [];

  // for (let idx = 0; idx < array.length; idx += 1) {
  //   if (func(array[idx], idx, array)) {
  //     resultArray.push(array[idx]);
  //   }
  // }

  // alternatively, can use forEach() - we don't have to build it completely from scratch!
  array.forEach(element => {
    if (func(element)) {
      resultArray.push(element);
    }
  });

  return resultArray;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

console.log(myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));  // [ 3, 5, 18, 15 ]
