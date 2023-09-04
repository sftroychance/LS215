// Write a Function named octalToDecimal that performs octal to decimal
// conversion. When invoked on a String that contains the representation of an
// octal number, the Function returns a decimal version of that value as a
// Number. Implement the conversion yourself: do not use something else to
// perform the conversion for you.

// abstractions: transform string, transform array, reduce
// 1. split the string into an array of characters
// 2. map each character to its numeric value
// 3. map each numeric value to its integer value (using index)
// 4. reduce the array of values to a sum
// 2 & 3 can be combined into one map function
// or 2 & 3 & 4 can be combined into a single reduce function

// notes:
// Prefer Math.pow to ** operator
// use initial value for reduce to account for an empty string

function octalToDecimal(numberString) {
  return numberString
    .split('')
    .map((char, idx, arr) => Number(char) * Math.pow(8, arr.length - 1 - idx))
    .reduce((sum, num) => sum + num, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
console.log(octalToDecimal(''));         // 0
