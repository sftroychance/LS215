// Write a function that displays a four-pointed diamond in an nxn grid, where n
// is an odd integer supplied as an argument to the function. You may assume
// that the argument will always be an odd integer.

// PEDAC
// P:
//  input: odd integer (will always be an odd integer)
//  output: print to display
//         - four-pointed diamond - max width = height
//            - first line is 1 diamond centered in n-size text field (next is 3, then 5, etc)
//         - printed element is *
// E:
//  - 1 - prints a single *
//  - 9
//  - -5 -> according to instructions, this is a possible value, but it's not meaningful; we still need to code to account for it
//  - no other edge cases (input will always be odd integer)
// D: array (to hold lines to be printed)
// A:
//  - declare function named 'diamond' that takes one parameter, an odd integer - num
//  - return if num < 0
//  - initialize an array of lines to be printed
//  - iterate 1 to num -> currentNum
//    - calculate starting pad for string -> num - currentNum / 2
//    - append to lines array ' ' * pad + '*' * currentNum
//    - currentNum += 2
//  - copy the lines array and pop the last value
//  - append copied array to the lines array
//  - iterate over array and log each element

function diamond(size) {
  if (size < 0) return;
  const lines = [];

  for (let current = 1; current <= size; current += 2) {
    const pad = (size - current) / 2;
    lines.push(' '.repeat(pad) + '*'.repeat(current));
  }

  const finalLines = lines.slice(0, -1).reverse();
  printLines = [...lines, ...finalLines];

  printLines.forEach(line => console.log(line));
}

diamond(1);
diamond(9);
diamond(-5);

