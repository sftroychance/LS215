// Write a function that takes a string as an argument and returns true if the
// string contains properly balanced parentheses, false otherwise. Parentheses
// are properly balanced only when '(' and ')' occur in matching pairs, with
// each pair starting with '('.

// - remove all chars that are not ( or )
// - replace () with '' until there are no more replacements found
// - return false if string has length > 0

function isBalanced(str) {
  workingStr = str.replace(/[^()]/g, '');


  while (workingStr.indexOf('()') >= 0) {
    workingStr = workingStr.replace(/\(\)/g, '');
  }

  return workingStr.length > 0 ? false : true;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
