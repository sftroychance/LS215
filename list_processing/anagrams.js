// Write a Function named anagram that takes two arguments: a word and an array
// of words. Your function should return an array that contains all the words
// from the array argument that are anagrams of the word argument. For example,
// given the word "listen" and an array of candidate words like "enlist",
// "google", "inlets", and "banana", the program should return an array that
// contains "enlist" and "inlets".

// abstractions:
// 1. write a function to split a word into characters, sort, and join
// 2. filter list - callback function compares sorted words

function anagram(word, list) {
  const compareWord = sortWord(word);

  return list.filter(listWord => compareWord === sortWord(listWord));
}

function sortWord(word) {
  return word
    .split('')
    .sort()
    .join('');
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]

// notes:
// the LS solution converts the words to arrays, sorts the arrays, then compares
// the arrays. I like the word appraoch, but an improvment would be to create a
// function to call within the filter() callback. A disadvantage to this
// is that the original word is re-sorted on each iteration, but pre-sorting
// that word and then passing it to areAnagrams() would cloud the intent of
// that function if it expects the first word to be sorted already.

function anagramRevision(word, list) {
  return list
    .filter(listWord => areAnagrams(word, listWord));
}

function areAnagrams(word1, word2) {
  // return word1.split('').sort().join('') === word2.split('').sort().join('');
  return sortWord(word1) === sortWord(word2);
}

console.log(anagramRevision('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagramRevision('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]


