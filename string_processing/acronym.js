// Write a function that generates and returns an acronym from a string of
// words. For example, the function should return "PNG" for the string "Portable
// Network Graphics". Count compound words (words connected with a dash) as
// separate words.

// - split string into array of words - split along spaces and hyphens
// - map array to first character of each word
// - map array to uppercase each element (can combine with previous map)
// - join and return

function acronym(string) {
  return string
    .split(/[- ]/)
    .map(word => word[0].toUpperCase())
    .join('');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"
