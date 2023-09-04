// Write a Function named myForEach that is similar to the built-in Array.prototype.forEach method. Your Function should take an array and another Function as arguments. The Function passed to myForEach should reassign a variable in the outer scope. For instance, in the code fragment below, the Function passed to myForEach reassigns the min variable.

function myForEach(array, func) {
  for (let idx = 0; idx < array.length; idx += 1) {
    func(array[idx], idx, array);
  }
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3

// on line 5, note that we do not need to pass idx and array to this particular function since it does not use them, but as a generic forEach() they should be passed to the function to allow the developer to include those parameters in the callback


// an example in which we create a function expression assigned to a variable and pass that variable to the list processing function as the callback.

min = Infinity;
let max = -Infinity;

let getMinMax = function (value) {
  if (value >= max) {
    max = value;
  }

  if (value <= min) {
    min = value;
  }
};

[4, 5, 12, 23, 3].forEach(getMinMax);

console.log(min, max);           // 3 23

// similar example, but this time we pass an anonymous function to forEach() directly

min = Infinity;
max = -Infinity;

[4, 5, 12, 23, 3].forEach(value => {
  if (value >= max) {
    max = value;
  }

  if (value <= min) {
    min = value;
  }
});

console.log(min, max);           // 3 23
