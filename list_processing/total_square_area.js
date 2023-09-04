// For this practice problem, we'll represent rectangles as Arrays with two elements: a height and a width.

// Write a Function named totalArea that takes an Array of rectangles as an argument. The Function should return the total area covered by all the rectangles.

// Combining abstractions - steps:
// 1. input rectangles array -> transformation - map() -> array of areas of all rectangles
// 2. input array of areas -> reduction - reduce() -> sum of areas in the array

function totalArea(rectangles) {
  return rectangles
    .map(([side1, side2]) => side1 * side2)
    .reduce((sum, area) => sum + area);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

// note: array deconstruction into sides, chained method calls, arrow functions

// Now, write a second Function named totalSquareArea. This Function should calculate the total area of a set of rectangles, just like totalArea. However, it should only include squares in its calculations: it should ignore rectangles that aren't square.

// combining abstractions:
// 1. input rectangle dimensions -> filter - filter() -> array of squares
// 2. array of squares -> transformation - map() -> array of areas
// 3. array of areas -> reduction - reduce() -> sum of areas

function totalSquareArea(rectangles) {
  return rectangles
    .filter(([side1, side2]) => side1 === side2)
    .map(([side1, side2]) => side1 * side2)
    .reduce((sum, area) => sum + area);
}

console.log(totalSquareArea(rectangles));
