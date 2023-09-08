// To look at the steps of this problem solving approach in depth, we will work
// through a problem and see how to apply each step in the process. The problem
// we will look at compares software version numbers.

// While version numbers often appear to be decimal numbers, they are, in fact,
// a convenient notation for a more complicated number system. The following are
// all legal version numbers:

// 1
// 1.0
// 1.2
// 3.2.3
// 3.0.0
// 4.2.3.0

// Write a function that takes any two version numbers in this format and
// compares them, with the result of this comparison showing whether the first
// is less than, equal to, or greater than the second version:

// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and the .
// character, we should return null.
// Here is an example of version number ordering:

// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

// problem:
//  - input: 2 version numbers - version1 and version2 - strings
//  - output: integer -  1 if version1 > version2, -1 if version1 < version 2,
//            0 if ===
//            null if either value contains chars that are not digits or '.'
//  - rules: the different 'sections' of the version number are compared
//          indepently until one is found to be greater or less than, or reach
//          the end of the number
//      implicit: invalid number if two '.' together: 1..2.3
// E:
//  - test invalid number  compareVersions('1.2.a.3', '1.2.3.4')
//        compareVersions('1.2.3.4', '1..2.3.4')
//  - equal cases compareVersions('1.2.3.0', '1.2.3.0')
//  - equal cases but different lengths compareVersions('1.0.0.0', '1.0')
// D:
//  - array
// A:
//  - declare function that takes two string parameters
//  - test both strings for validity, return null if invalid
//  - split each string into array with delimiter '.'
//  - if arrays are of different length, append '0' to the smaller array
//    until lengths are equal
//  - iterate over index values, comparing the arrays element by element
//    - if one value is greater than equal to the other, return 1 or -1
//  - return 0

function compareVersions(version1, version2) {
  const re = /^\d+(\.\d+)*$/;
  if (!version1.match(re) || !version2.match(re)) return null;

  const ver1Arr = version1.split(/\./).map(Number);
  const ver2Arr = version2.split(/\./).map(Number);

  const shorterArray = ver1Arr.length < ver2Arr.length ? ver1Arr : ver2Arr;

  while (ver1Arr.length !== ver2Arr.length) {
    shorterArray.push(0);
  }

  for (let idx = 0; idx < ver1Arr.length; idx += 1) {
    if (ver1Arr[idx] < ver2Arr[idx]) {
      return -1;
    } else if (ver1Arr[idx] > ver2Arr[idx]) {
      return 1;
    }
  }

  return 0;
}

// example/edge cases
console.log(compareVersions('1.2.a.3', '1.2.3.4')); // null
console.log(compareVersions('1.2.3.3', '1...3.4')); // null
console.log(compareVersions('1.2.1.0', '1.2.1.0')); // 0
console.log(compareVersions('1.2.0.0', '1.2')); // 0
console.log(compareVersions('1.2', '3.4.5.288')); // -1
console.log(compareVersions('3.4', '3.4.0.1')); // -1
console.log(compareVersions('1', '3.4.0.0')); // -1
console.log(compareVersions('1.2.1.0', '1.2.25.0')); // -1
console.log(compareVersions('4.2.8.15', '3.2')); // 1
