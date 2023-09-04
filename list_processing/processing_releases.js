/* eslint-disable max-len */
// Write a Function named processReleaseData that processes the movie release data below.

// The Function should generate an Array of Objects that contain only the id and title key/value pairs. You may assume that id and title, when existing, is an integer greater than 0 and non-empty string respectively. Here are the rules:

// Keep only releases that have both id and title property present.
// Keep only the id and title data for each release.

// abstractions:
// 1. input newReleases array -> filter() -> output newReleases with title & id
// 2. input selected newReleases -> transformation - map() -> output array of objects with only title & id properties

// testing for property: 'id' in object && 'title' in object
// deconstruct object to return only certain properties
// - map(({id, title}) => ({id, title})) - deconstruction plus shortcut object syntax
// note: learned along the way - both the destructuring and object being returned must be in parentheses

let newReleases = [
  {
    id: 70111470,
    title: 'Die Hard',
    boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [5.0],
    bookmark: [{ id:432534, time:65876586 }],
  },
  {
    title: 'The Chamber',
    boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: 'Fracture',
    boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [5.0],
    bookmark: [{ id:432534, time:65876586 }],
  },
];

function processReleaseData(data) {
  return data
    .filter(film => 'id' in film && 'title' in film)
    .map(({id, title}) => ({ id, title }));
  // .map(film => ({ id: film.id, title: film.title })); without concise initializers/destructuring
}

console.log(processReleaseData(newReleases));

// should return:
// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
