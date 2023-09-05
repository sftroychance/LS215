function transpose(arr) {
  let result = Array.from(Array(arr[0].length), () => new Array(arr.length));

  arr.forEach((subarray, idx) => {
    subarray.forEach((element, idx2) => {
      result[idx2][idx] = element;
    });
  });

  return result;
}


let myArr = [
  [1, 5, 9],
  [2, 6, 10],
  [3, 7, 11],
  [4, 8, 12]
];

console.log(transpose(myArr));
