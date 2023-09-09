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

console.log(getCompleteNumbers('1, 3, 7, 2, 4, 1')); // 1, 3, 7, 12, 14, 21
console.log(getCompleteNumbers('1-3, 1-2')); // 1, 2, 3, 11, 12
console.log(getCompleteNumbers('1:5:2')); // 1, 2, 3, 4, 5, 6 . . . 12
console.log(getCompleteNumbers('104-2')); // 104, 105 . . . 112
console.log(getCompleteNumbers('104-02')); // 104, 105 . . . 202
console.log(getCompleteNumbers('545, 64:11')); // 545, 564, 565 . . . 611

// split along ,
// result array = []
// if /^\d+$/ and last number < current number push to result array
// if /^\d+$/ and last number > current number
//  - increment last number in result array until string version of incremented number === current number
//  - and append that incremented number
// if /^\d+[-:\.{2}] - increment last number in result array until the end matches (\d+)
//  append that number to the result array and replace that number in the current string with ''
// if next char is a range char, find next (\d+) and keep adding increments to result array until end of current number matches that next /\d+/

element by element
if ^\d+$
  if result array empty, append
  if last ele of result array < current -> append
  if last ele of result array > current -> increment last number in result array until the end matches current, then append
else
  until current element = '' (processing char by char)
    - if next is number, get number and compare to last element of result array, increment that last number until the end matches the current number and append; then replace that number with '' in the current element
    - if next char is - get next number found in the current element; increment the last number and keep appending until the last number in the result array matches this number; remove range operator and number from current element
end
return result array
