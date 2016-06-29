'use strict';
// Error handling

// bugs: flaws in programs. Fixing them = debugging

/*

Types of errors:


Compilation errors (syntax): Invalid js. javascript throws an error on these immediately, prevents you from running the script.
  - tip: use a linter (e.g. eslint, also a sublime plugin)
  - tip: use a js formatter (search sublime plugins)

Runtime errors: invalid operations (e.g. dividing by 0). Use Chrome debugging tools to debug:
  - set breakpoints
  - step through the code

Logic errors: the program returns a valid result, but the result is not what you expected.
  - test with expected inputs & outputs

*/

// Better Error Handling

// tip: name all your functions, so they show up in error logs


// --- raise an exception ---
// throw a custom error (that you write!) when an error comes up
// it's good to throw errors!

// why:
// - the default error message thrown usually sucks
// - they can occur in unexepcted, unintuitive places
// - things can fail silently (e.g. logic errors)
// - validating your inputs is good.
// - it's easier to plan for failure somewhere, than to anticipate it everywhere.

function callMe(x) {
  if (typeof x !== 'number') {
    throw 'Expected a number but got ' + x;
  }
  if (x === undefined) {
    throw 'callMe expected an argument but got undefined';
  }
}

// same as

function callMe(x) {
  if (x === undefined) {
    throw new Error('callMe expected an argument but got undefined');
    // ^ has more consistent browser behavior than just `throw`
  }
  if (typeof x !== 'number') {
    throw new TypeError('Expected a number but got ' + x);
  }
}

// other types of errors besides just Error (a base for all errors):
// TypeError
// ReferenceError
// RangeError (# is out of bounds)


// throw new Error >> raises an exception, exits the function

// --- try/catch ---
// throw by itself, will result in an error without a try-catch block.
// a try-catch block, will "catch" the thrown error and do something with it.

function callMe() {
  try {
    // Block of code to try
    throw 'foo';
  } catch(err) {
    // Block of code to handle errors
    // lets you handle any errors that were thrown (via 'throw') in the try block
    // err: gives you the text of the error that was thrown in `throw`

    // in this case, err === 'foo'
    console.log(err); // => 'foo'
  }
}

// WARNING: putting nothing in the catch block, means that errors in the try {} will fail silently


// -- optional finally --

try {
    // Block of code to try
} catch(err) {
    // Block of code to handle errors
} finally {
    // Block of code to be executed regardless of the try / catch result
}

// exercise: see error-handling.html

// --- use strict ---
// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode

'use strict'; // above every file, or a function

// throws useful errors

// throws on, e.g.
// Setting a value to an undeclared variable
// Trying to delete a non-configurable property
// ... and other useful scenarios. Learn more as you encounter them.