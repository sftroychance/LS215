// You are given a list of numbers in a "short-hand" range where only the
// significant part of the next number is written because we know the numbers
// are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14,
// 21]). Some people use different separators for their ranges (ex. "1-3, 1-2",
// "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range
// limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611

// declare function getCompleteNumbers that takes one parameter (inputString)
// split input string with ', ' delimiter (string: shorthand)
// declare empty result array (array: result)
// loop element by element (for..of) (current element: string: spec)
// - while spec length > 0
//   - if next value in spec is a number (regex)
//     - match to get the number (currentValue)
//     - if result array empty, append currentValue
//     - if last element of result array < currentValue -> append currentValue
//     - if last ele of result array > currentValue
//       - declare nextValue and set to last number in result array + 1
//         (if you don't pre-increment, '1, 2, 2' will not result in '1, 2, 12')
//       - increment nextValue until its string value ends with string value
//         of currentValue
//       - append nextValue to result array
//     - replace currentValue with '' in spec
//   - if next value in spec is range delimiter
//     - replace range delimiter with '' in spec
//     - get the next number found in spec (currentValue)
//     - declare nextValue and set to last number in result array
//     - increment nextValue and keep appending the incremented value to the
//       result array until the string value of nextValue ends with the string
//       value of currentValue
//     - replace currentValue with '' in spec
// return result array
// note: if the range is extended, liked '1:5:2', the first pass through
//       the while loop will take care of the 1, the next pass will
//       handle ':5', and the next pass will handle ':2'

const numberRE = /^\d+/;
const rangeCharRE = /^([-:]|\.{2})/;

function getCompleteNumbers(inputString) {
  const shorthand = inputString.split(', ');
  const result = [];

  for (let spec of shorthand) {
    while (spec.length > 0) {
      if (spec.match(numberRE)) {
        let currentValue = Number(spec.match(numberRE)[0]);

        appendNextValue(currentValue, result);

        spec = spec.replace(currentValue, '');
      } else if (spec.match(rangeCharRE)) {
        spec = spec.replace(rangeCharRE, '');
        let currentValue = spec.match(numberRE)[0];

        appendRange(currentValue, result);

        spec = spec.replace(currentValue, '');
      }
    }
  }

  return result;
}

function appendNextValue(currentValue, result) {
  let nextResult = result[result.length - 1] + 1;

  if (!nextResult || nextResult < currentValue) {
    result.push(currentValue);
  } else {
    while (!String(nextResult).endsWith(String(currentValue))) {
      nextResult += 1;
    }
    result.push(nextResult);
  }
}

function appendRange(currentValue, result) {
  let nextResult = result[result.length - 1];

  while (!String(nextResult).endsWith(currentValue)) {
    nextResult += 1;
    result.push(nextResult);
  }
}

console.log(getCompleteNumbers('1, 3, 7, 2, 4, 1')); // 1, 3, 7, 12, 14, 21
console.log(getCompleteNumbers('1-3, 1-2')); // 1, 2, 3, 11, 12
console.log(getCompleteNumbers('1:5:2')); // 1, 2, 3, 4, 5, 6 . . . 12
console.log(getCompleteNumbers('104-2')); // 104, 105 . . . 112
console.log(getCompleteNumbers('104-02')); // 104, 105 . . . 202
console.log(getCompleteNumbers('545, 64:11')); // 545, 564, 565 . . . 611
console.log(getCompleteNumbers('1, 2, 2'));
