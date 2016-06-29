// objects:

var obj = {
  'foo': 1,
  'bar': 2,
  'baz asdfadsfadsf': 3
};

var book = {
  author: 'JK Rowling',
  title: 'Harry Potter'
};

obj.foo; // => 1
obj.baz; // => 1

// you know exactly what key you want.

// arrays:

var arr = ['foo', 'bar', 'baz', 'roo', 'asdf'];

arr[0]; // => 'foo'

// is kind of like

var obj = {
  0: 'foo',
  1: 'bar',
  2: 'baz',
  3: 'roo',
  4: 'asdf'
};

obj['1'] === arr[1];
obj['3'] === arr[3];


// ====================================
//  Arrays
// ====================================

// arrays are indexed by a number, so:
// - you can do math on the indices
// - you can loop on indices
// - you can use array methods, like sort
// - you can manipulate strings like an array

// ** you can do math on the indices **
arr[arr.length - 1]; // returns the last element

arr[Math.floor(arr.length / 2)]; // tries to return the middle element

// ** you can loop on indices **

// example: print every other element in the collection

// -- array
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// ------ equivalent shortcut: forEach
arr.forEach(function(element, i, wholeArray) {
  console.log(arr[i]);
});

// -- object
console.log(obj.1);
console.log(obj.3);
console.log(obj.5);

// ** you can use array methods, like sort **
arr.sort(); // 123 or "abc" (unicode sort)

arr.sort(function(a, b) {
  return a - b;
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


// #push: adds to the end
var arr = [1,2,3,4];
arr.push(0);
console.log(arr); // => [1,2,3,4,0]


// #unshift: adds to the beginning
var arr = [1,2,3,4];
arr.unshift(0);
console.log(arr); // => [0,1,2,3,4]


// #pop: removes the last (mutates the array)
var arr = [1,2,3,4];
arr.pop();
console.log(arr); // => [1,2,3]

// #slice: returns a COPY of a slice of the array,
// slice([startIndex], [length])
var arr = [1,2,3,4];
arr.slice(0, 2);
console.log(arr); // => [1,2,3,4] because original arr not affectd
console.log(arr.slice(1,2)); // => [2,3] prints the COPY


// #length
var arr = [1,2,3,4];
console.log(arr.length); // => 4

// #concat takes an ARRAY and returns a COPY of the merger of both arrays
// #concat takes an ARRAY as the argument
var arr = [1,2,3,4];
arr.concat(['a','b','c']);
console.log(arr); // => [1,2,3,4]; arr not affected by #concat
console.log(arr.concat(['a','b','c'])); // => [1,2,3,4,'a','b','c']

// #indexOf
var arr = ['a','b','c'];
arr.indexOf('b'); // => 1

// ** deletion (works on both objects and arrays) **
var arr = ['a','b','c'];
delete arr[1];
console.log(arr); // => ['a', 'c']

var obj = {
  foo: 'bar'
};

delete obj.foo;
console.log(obj); // => {}

// exercise example: find all the vowels of a string
//   use delete and #indexOf


// ** you can manipulate strings like an array **
var string = 'hooplah! cowabunga!hey!';
string[0]; // => 'h'
string[string.length - 1]; // => '!'
string[3]; // => 'p'

// explode strings (convert into an array of characters)
string.split('!'); // => ['hoolpah', ' cowabunga', 'hey', '']
string(split('! ')); // => ["hooplah", "cowabunga", "hey!"]
// now you can use array methods!

// exercise example: traverse a string, add up any numbers found, and return the sum

/*
examples: use an array or object?

1) sort a list of numbers from smallest to largest.

2) which word has the greatest number of repeated letters.

3) print the number of 'a's, 'r's, and 'x's in a word.

4)

*/