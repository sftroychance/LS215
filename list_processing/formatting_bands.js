// There are problems with the given data, so we first have to clean it up
// before we can use it:

// The band countries are wrong: all the bands should have 'Canada' as the
// country.  The band name should have all words capitalized.  Remove all dots
// from the band names.  Write a function that can process the input band Array
// and return an Array that contains the fixed information:

// abstractions:
// 1. map the given array
//    - replace all dots with empty strings (a function)
//    - capitalize band names (a function with a map)
//    - return object
// use object destructuring and concise property syntax where possible

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data
    .map(({name, active}) => { // deconstructing object
      return {
        name: toTitleCase(removeDots(name)),
        country: 'Canada',
        active, // concise initializer
      };
    });
}

function removeDots(word) {
  return word.replaceAll('.', '');
}

function toTitleCase(phrase) {
  return phrase
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(processBands(bands));
console.log(bands);

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
