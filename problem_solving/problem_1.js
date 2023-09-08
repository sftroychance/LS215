// Write a program that cleans up user-entered phone numbers so that they can be
// sent as SMS messages. Other than digits, the number may also contain special
// character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and
// use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a
// bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.

// P:
//  given a string, return a valid phone number if one is contained within it,
//  per the rules
//  rules:
//    - if number < 10 digits, not valid
//    - if = 10 digits, valid
//    - if 11 digits and first digit is 1, remove that 1
//    - if 11 digits and first digit is not 1, not valid
//    - if > 11 digits, not valid
//    - ignore non-digit characters: spaces, -, ., ()
//  input: a string
//  output: valid phone number, or 10 0's if string does not contain a valid #
//  to clarify: if there are any other non-digit characters (like letters),
//          is the entire number invalid?
//    for now, the assumption is that any other character in the string
//    makes it invalid
// Examples/edge cases: coded below
// D: strings (replace and match with regex)
// A:
//  - declare function cleanPhoneNumber that takes one parameter - string
//  - replace allowable non-digit characters with ''
//  - match clean string to regex - 10 digits or 11 digits starting with 1
//    - if no match, return '0000000000'
//    - if match, return string (remove first number if 11 digits)
//  note: '0000000000' is a configurable number, so make it a constant

function cleanPhoneNumber(string) {
  const INVALID_NUMBER = '0000000000';

  const reInvalidChars = /[-.()\s]/g;
  const cleanNumber = string.replace(reInvalidChars, '');

  const reValidNumber = /(^(?<n>\d{10})$|^1(?<p>\d{10})$)/;

  const matches = cleanNumber.match(reValidNumber);

  return matches?.groups.n ?? matches?.groups.p ?? INVALID_NUMBER;
}

console.log(cleanPhoneNumber(`1234567899`)); // '1234567899'
console.log(cleanPhoneNumber('11234567899')); // '1234567899'
console.log(cleanPhoneNumber('21234567899')); // '0000000000'
console.log(cleanPhoneNumber('(123)456-7899')); // '1234567899'
console.log(cleanPhoneNumber('123.456.7899')); // '1234567899'
console.log(cleanPhoneNumber('123 456 7899')); // '1234567899'
console.log(cleanPhoneNumber('123456789')); // '0000000000'
console.log(cleanPhoneNumber('123456789999')); // '0000000000'
console.log(cleanPhoneNumber('123456789a')); // '0000000000'

