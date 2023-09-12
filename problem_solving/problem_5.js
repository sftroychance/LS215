/* eslint-disable max-lines-per-function */
// Implement encoding and decoding for the rail fence cipher.

// The Rail Fence cipher is a form of transposition cipher that gets its name
// from the way in which it's encoded. It was already used by the ancient
// Greeks.

// In the Rail Fence cipher, the message is written downwards on successive
// "rails" of an imaginary fence, then moving up when we get to the bottom (like
// a zig-zag). Finally the message is then read off in rows.

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .

// to encode, you are given a string and the number of rails for encoding
// to decode, you are given the encoded string and number of rails

// P:
//  Encoding:
//    - input: a string to encode and integer: number of rails
//    - output: an encoded string
//  Decoding:
//    - input: a string to decode and integer number of rails
//    - output: decoded string

// mental model: the problem explains it visually as a set of rails, but this
// can be translated into a multidimensional array, which each subarray
// representing a rail, and iterating over the string and (for encoding)
// appending the character to the next rail. The order of rail traversal is a
// cycle that ascends and descends in terms of index. For instance, with five
// rails, the cycle (indicating the subarray to append to) is:
// [0, 1, 2, 3, 4, 3, 2, 1]. Taking a lesson from how keys are distributed in
// a hash table, a loop index (idx) would access each member of the cycle
// per the calculation idx % cycle.length.

// E: cases below

// D: multidimensional array, strings

// A:
// Encode
// - declare function RailFenceCipherEncode that takes two parameters
//    (string, railCount)
// - create an array (rails) of size railCount; initialize each element to an
// empty array
// - create an array (railCycle):
//   - create an array that contains integers 0 to (railCount - 1)
//   - copy that array and reverse it; remove first and last elements of that
//   array
//   - concatenate these two arrays
// - loop through the string chars with index (idx)
//   - append each character to rails; select subarray with idx %
//   railCycle.length
// - rails is now an array of subarrays of letters; flatten rails array and join
// chars into a single string
// - return encoded string

// Decode
// - declare function RailFenceCipherDecode that takes two parameters (string,
// railCount)
// - create an array (rails) that contains subarrays of size string.length
// - create an array (railCycle):
//   - create an array that contains integers 0 to (railCount - 1)
//   - copy that array and reverse it; remove first and last elements of that
//   array
//   - concatenate these two arrays
// loop 0 to string.length - 1 (idx)
//   - rails[railCycle[idx % railCycle.length]][idx] = null
//
// declare result string = ''
// iterate over subarrays, shifting a char from
//  rails[railCycle[idx % railcycle.length]] to result
// return result string

const railFenceCipher = {
  createBidirectionalCycle(cycleCount) {
    const cycle = Array.from({length: cycleCount}, (_, idx) => idx);
    return cycle.concat(cycle.slice(1, -1).reverse());
  },

  encode(string, railCount) {
    const rails = Array.from(Array(railCount), () => []);

    const railCycle = this.createBidirectionalCycle(railCount);

    [...string].forEach((char, idx) => {
      const railsIndex = railCycle[idx % railCycle.length];
      rails[railsIndex].push(char);
    });

    return rails.flat().join('');
  },

  decode(string, railCount) {
    const rails = Array.from(Array(railCount), () => Array(string.length));

    const railCycle = this.createBidirectionalCycle(railCount);

    for (let idx = 0; idx < string.length; idx += 1) {
      const railsIndex = railCycle[idx % railCycle.length];
      rails[railsIndex][idx] = null;
    }

    const stringChars = [...string];

    rails.forEach((rail, idx1) => {
      rail.forEach((_, idx2) => {
        rails[idx1][idx2] = stringChars.shift();
      });
    });

    let result = '';

    for (let idx = 0; idx < string.length; idx += 1) {
      const railsIndex = railCycle[idx % railCycle.length];
      result += rails[railsIndex][idx];
    }

    return result;
  },
};

// revision that does not require rebuilding the rails
railFenceCipher.decode = function revisedDecode(string, railCount) {
  const railCycle = this.createBidirectionalCycle(railCount);
  const letterCountPerRail = Array(railCount).fill(0);

  for (let idx = 0; idx < string.length; idx += 1) {
    const lettersIndex = railCycle[idx % railCycle.length];
    letterCountPerRail[lettersIndex] += 1;
  }

  const stringArr = [...string];
  const rails = letterCountPerRail.map(count => stringArr.splice(0, count));

  let result = '';
  for (let idx = 0; idx < string.length; idx += 1) {
    const railsIndex = railCycle[idx % railCycle.length];
    result += rails[railsIndex].shift();
  }

  return result;
};

console.log(railFenceCipher.encode('', 3));
console.log(railFenceCipher.encode('WEAREDISCOVEREDFLEEATONCE', 3));
// 'WECRLTEERDSOEEFEAOCAIVDEN'
console.log(railFenceCipher.encode('More rails than letters.', 24));
// 'More rails than letters'
console.log(railFenceCipher.encode('THEDEVILISINTHEDETAILS', 3));
// 'TEITELHDVLSNHDTISEIIEA'
console.log(railFenceCipher.encode('EXERCISES', 4)); //'ESXIEECSR'
console.log(railFenceCipher.decode('', 1));
console.log(railFenceCipher.decode('WECRLTEERDSOEEFEAOCAIVDEN', 3));
// 'WEAREDISCOVEREDFLEEATONCE'
console.log(railFenceCipher.decode('More rails than letters.', 24));
// 'More rails than letters'
console.log(railFenceCipher.decode('TEITELHDVLSNHDTISEIIEA', 3));
// 'THEDEVILISINTHEDETAILS'
console.log(railFenceCipher.decode('ESXIEECSR', 4)); //'EXERCISES'
