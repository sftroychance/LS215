// The Luhn formula is a simple checksum formula used to validate a variety of
// identification numbers, such as credit card numbers and Canadian Social
// Insurance Numbers.

// The formula verifies a number against its included check digit, which is
// usually appended to a partial number to generate the full number. This number
// must pass the following test:

// Counting from the rightmost digit and moving left, double the value of every
// second digit
// For any digit that thus become 10 or more, subtract 9 from the result
// 1111 becomes 2121
// 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 =
// 7)
// Add all these digits together
// 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
// 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
// If the total (the checksum) ends in 0 (put another way, if the total modulo
// 10 is congruent to 0), then the number is valid according to the Luhn
// Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it
// comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid
// per the Luhn formula. This should treat, for example, "2323 2005 7766 3554"
// as valid. You can ignore all non-numeric characters in the input string.

// P: input: string
//    output: boolean - true if number is valid Luhn
//    r: counting from right, replace every 2nd digit with double its value;
//       if the result is >= 10, subtract 9 from it and use that value instead
//       - then add all the digits
//       - valid Luhn number ends in '0' or number % 10 === 0
//       - ignore any non-digit chars in input string
// E: below
// D: string (replace to clean string), array (map, reduce)
// A:
//  - declare function isValidLuhn that takes one string parameter
//  - clean input string - string replace non-digit chars with ''
//  - split the string
//  - reverse the char array
//  - map the chars to numbers
//  - map to double each element
//  - map to subtract 9 if > 9
//  - reduce to sum all values in array
//  - determine whether sum divisible by 10 (%) (refactor: also sum must be > 0)
//  - return boolean result

function isValidLuhn(testString) {
  const sumValues = testString
    .replace(/\D/g, '')
    .split('')
    .reverse()
    .map(Number)
    .map((num, idx) => (idx % 2 === 1 ? num * 2 : num))
    .map(num => (num > 9 ? num - 9 : num))
    .reduce((sum, val) => sum + val, 0);

  return sumValues > 0 && sumValues % 10 === 0;

  // const workingString = testString.replace(/\D/g, '');

  // const workingArray = workingString
  //   .split('')
  //   .reverse();

  // const doubledValues = workingArray
  //   .map((num, idx) => {
  //     let returnVal = idx % 2 === 1 ? 2 * Number(num) : Number(num);
  //     if (returnVal > 9) returnVal -= 9;
  //     return returnVal;
  //   });

  // const sumValues = doubledValues
  //   .reduce((sum, val) => sum + val, 0);

  // return sumValues > 0 && sumValues % 10 === 0;
}

console.log(isValidLuhn('2323 2005 7766 3554')); // true
console.log(isValidLuhn('8763')); // true

console.log(isValidLuhn('1111')); // false
console.log(isValidLuhn('232a 2005 7766 3554')); // false
console.log(isValidLuhn('232! 2005 7766 3554')); // false
console.log(isValidLuhn('2423 2005 7766 3554')); // false
console.log(isValidLuhn('')); // false

