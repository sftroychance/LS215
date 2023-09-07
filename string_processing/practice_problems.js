rlSync = require('readline-sync');
// 1. Create a variable named firstName and set it equal to your first name. Set
// another variable named lastName to your last name. Join the two together,
// separated by a space, and store the result in a variable named fullName. Log
// the value of fullName.

const firstName = 'Troy';
const lastName = 'Graves';
const fullName = firstName + ' ' + lastName;

console.log(fullName);

// 2. Call concat on firstName using lastName as an argument. Log the return
// value.

console.log(firstName.concat(lastName));

// 3. Split the fullName variable into an array that contains the first and last
// names as separate strings. Log the value of the array.

const nameArray = fullName.split(' ');

console.log(nameArray);

// 4. Create a variable named language and set it equal to 'JavaScript'. Find
// the index of the first occurrence of the letter 'S' and save it to a variable
// named idx variable. Log the value of idx.

const language = 'JavaScript';
const idx = language.indexOf('S');

console.log(idx);

// 5. Call charCodeAt on the language variable with an argument of idx. Save the
// return value to a variable named charCode, then log the value of charCode.

const charCode = language.charCodeAt(idx);

console.log(charCode);

// 6. Log the return value of String.fromCharCode when you pass it charCode as
// an argument.

console.log(String.fromCharCode(charCode));

// 7. Find the index of the last occurrence of the letter 'a' in the language
// variable and log the result.

console.log(language.lastIndexOf('a'));

// 8. Create two variables, a = 'a' and b = 'b'. Log a "greater than" comparison
// between the two variables. Reassign the value 'B' to variable b, then compare
// the two variables again, and log the comparison value.

const a = 'a';
let b = 'b';

console.log(a > b);

b = 'B';

console.log(a > b);

// 9. Call the language.slice method with arguments 1 and 4. Next, call the
// method with arguments 2 and 4. Log the return values.

console.log(language.slice(1, 4));
console.log(language.slice(2, 4));

// 10. Repeat the previous problem, but this time use substring instead of
// slice. Do the results differ in any way?

console.log(language.substring(1, 4));
console.log(language.substring(2, 4));

// 11.  Call the language.slice method with arguments 1 and -1. Next, call the
// method with arguments 2 and -1. Log the return values.

console.log(language.slice(1, -1));
console.log(language.slice(2, -1));

// 12. Repeat the previous problem, but this time use substring instead of
// slice. Do the results differ in any way?

// substring() changes negative values to zero and also switches values if
// start > stop
console.log(language.substring(1, -1));
console.log(language.substring(2, -1));

// 13. Create variables named fact1 and fact2 and set them equal to 'JavaScript
// is fun' and 'Kids like it too', respectively. Combine the values of the two
// variables with the string ' and ' between them, and store the result in a
// variable named compoundSentence. Make sure the first letter of fact2 shows up
// as lowercase in compoundSentence. Log the value of compoundSentence.

const fact1 = 'JavaScript is fun';
const fact2 = 'Kids like it too';
const compoundSentence = fact1 + ' and ' + fact2.toLowerCase();

console.log(compoundSentence);

// 14. Log the first letter of fact1 and fact2 using bracket notation.

console.log(fact1[0], fact2[0]);

// 15. Create a variable named pi and set it to the result of 22 / 7. Convert pi
// to a String using the toString method. Search the resulting string for the
// final occurrence of '14', and log its index position.

let pi = 22 / 7;
pi = pi.toString();

console.log(pi.lastIndexOf('14'));

// 16. Create a variable named boxNumber and set it to the result of calling
// 356.toString(), and log the result. Before moving on, try to run your
// program.

// let boxNumber = 365.tostring();j
// Syntax error - JS thinks the . is a decimal for the number
// but
let boxNumber = 365..toString();
console.log(boxNumber);

// better than two periods, which some linters do not like:
boxNumber = (365).toString();
console.log(boxNumber);

// 17. Convert the boxNumber variable back to a number using parseInt. To make
// sure the result is a number, you can log typeof boxNumber to verify the type
// of the result. Now convert the number back to a String by using the String
// function and log the typeof of the result to verify it is now a String.

boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);

boxNumber = String(boxNumber);
console.log(typeof boxNumber);

// 18. Write a program that asks for a user's name, then greets the user with
// that name. If the user appends a ! to his name (e.g., 'Bill!'), the computer
// should "yell" its greeting: that is, it should log everything to the console
// in uppercase. You can check whether the name ends with a ! using
// String.prototype.endsWith (ES6 only). You can remove the ! from the user's
// name with String.prototype.slice.

let userName = rlSync.question('What is your name? ');
let message = `Hello, ${userName}`;

if (userName.endsWith('!')) {
  console.log(message.slice(0, -1).toUpperCase());
} else {
  console.log(message);
}
// REGEX practice
// Write a method that returns true if its argument looks like a URL, false if it does not.

function isUrl(str) {
  return str.match(/^https?:\/\/\S+$/) ? true : false;
}

console.log(isUrl('http://launchschool.com'));   // -> true
console.log(isUrl('https://example.com'));       // -> true
console.log(isUrl('https://example.com hello')); // -> false
console.log(isUrl('   https://example.com'));    // -> false


// Write a method that returns all of the fields in a haphazardly formatted
// string. A variety of spaces, tabs, and commas separate the fields, with
// possibly multiple occurrences of each delimiter.

function fields(str) {
  return str.split(/[ \t,]+/g);
}

console.log(fields("Pete,201,Student"));
// -> ['Pete', '201', 'Student']

console.log(fields("Pete \t 201    ,  TA"));
// -> ['Pete', '201', 'TA']

console.log(fields("Pete \t 201"));
// -> ['Pete', '201']

console.log(fields("Pete \n 201"));
// -> ['Pete', '\n', '201']

// Write a method that changes the first arithmetic operator (+, -, *, /) in a
// string to a '?' and returns the resulting string. Don't modify the original
// string.

function mysteryMath(str) {
  return str.replace(/[-+*/]/, '?');
}

console.log(mysteryMath('4 + 3 - 5 = 2'));
// -> '4 ? 3 - 5 = 2'

console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// -> '(4 ? 3 + 2) / 7 - 1 = 1'

// Write a method that changes every arithmetic operator (+, -, *, /) to a '?'
// and returns the resulting string. Don't modify the original string.
function mysteriousMath(str) {
  return str.replace(/[-+*/]/g, '?');
}

console.log(mysteriousMath('4 + 3 - 5 = 2'));           // -> '4 ? 3 ? 5 = 2'
console.log(mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1')); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'

// Write a method that changes the first occurrence of the word apple,
// blueberry, or cherry in a string to danish.

function danish(str) {
  const re = /\b(apple|blueberry|cherry)\b/;
  return str.replace(re, 'danish');
}

console.log(danish('An apple a day keeps the doctor away'));
// -> 'An danish a day keeps the doctor away'

console.log(danish('My favorite is blueberry pie'));
// -> 'My favorite is danish pie'

console.log(danish('The cherry of my eye'));
// -> 'The danish of my eye'

console.log(danish('apple. cherry. blueberry.'));
// -> 'danish. cherry. blueberry.'

console.log(danish('I love pineapple'));
// -> 'I love pineapple'

// Challenge: write a method that changes strings in the date format 2016-06-17
// to the format 17.06.2016. You must use a regular expression and should use
// methods described in this section.

function formatDate(date) {
  const re = /^(\d{4})-(\d{2})-(\d{2})$/
  return date.replace(re, '$3.$2.$1');
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)

// Challenge: write a method that changes dates in the format 2016-06-17 or
// 2016/06/17 to the format 17.06.2016. You must use a regular expression and
// should use methods described in this section.

function newFormatDate(date) {
  const re = /^(\d{4})([-/])(\d{2})\2(\d{2})$/;
  return date.replace(re, '$4.$3.$1');
}

console.log(newFormatDate('2016-06-17')); // -> '17.06.2016'
console.log(newFormatDate('2017/05/03')); // -> '03.05.2017'
console.log(newFormatDate('2015/01-31')); // -> '2015/01-31' (no change)
