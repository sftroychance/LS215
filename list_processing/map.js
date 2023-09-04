// Transformation of an Array is the creation of a new Array that contains values calculated from the values in the original Array. JavaScript supplies the map method for transformation:

function myMap(array, func) {
  let resultArray = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    if (idx in array) {
      resultArray.push(func(array[idx], idx, array));
    } else {
      resultArray.length += 1; // an empty item cannot be push()'ed to the array
    }
  }

  return resultArray;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]
console.log(myMap([1, 2, , 3, 4], plusOne));       // [ 2, 3, <1 empty item>, 4, 5 ]

// note: the text example does not account for empty slots in the original array (it ignores them completely), but map() keeps those slots as empty; here, incrementing the length of the resultArray will create an empty slot where the empty slot appears in the original array

function getBooksTitle(books) {
  // ...
}

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

function getTitle(book) {
  return book['title'];
}

function getBooksTitle(books) {
  return myMap(books, getTitle);
}

console.log(getBooksTitle(books));
