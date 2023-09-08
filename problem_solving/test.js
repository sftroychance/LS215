let str = '-'.repeat(64);
console.log(str);

let coords = str.split('').map((ele, idx) => [ele, [Math.floor(idx / 8), idx % 8]]);
console.log(coords);
