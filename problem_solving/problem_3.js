// A collection of spelling blocks has two letters per block, as shown in this
// list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that
// do not use both letters from any given block. You can also only use each
// block once.

// Write a function that takes a word string as an argument, and returns true if
// the word can be spelled using the set of blocks, or false otherwise. You can
// consider the letters to be case-insensitive when you apply the rules.

// P: Given a string, determine if the string can be created with a set of
//    blocks in which two letters share the same block
//    - block configuration is provided (a string with blocks delimited by |)
//    Input: a string
//    Output: boolean
//    - each block can be used only once
//    - assumption: an empty word cannot be made with the blocks (0 blocks)
//    - assumption: any non-alpha chars results in false
//    - case insensitive
// E: below
// D: string (to normalize case, verify all-alpha), array(map to hash index)
//    hash (block lookup)
// A:
//  - declare function isBlockWord that takes one string parameter (word)
//  - return false if empty string or if string contains non-alpha chars
//  - convert block configuration string to a hash
//    - split along delimiter '|'
//    - reduce with index to hash hash[letter] = blockNumber (idx)
//  - convert word to lowercase
//  - split to array of chars
//  - map to hash values of letters (block numbers)
//  - compare length of char array to length of mapped array converted to set
//    (to eliminate unique values)
//  - return true if lengths are equal, false if not


function blockHash() {
  const blocks = 'bo|xk|dq|cp|na|gt|re|fs|jw|hu|vi|ly|zm';

  return blocks
    .split('|')
    .reduce((hash, block, idx) => {
      for (let letter of [...block]) {
        hash[letter] = idx;
      }
      return hash;
    }, {});
}

function isBlockWord(word) {
  if (word === '' || word.match(/[^A-Z]/i)) return false;

  const blockLookup = blockHash();

  const blockNumbers = word
    .toLowerCase()
    .split('')
    .map(letter => blockLookup[letter]);

  return blockNumbers.length === [...new Set(blockNumbers)].length;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord(''));       // false
console.log(isBlockWord('123'));       // false
