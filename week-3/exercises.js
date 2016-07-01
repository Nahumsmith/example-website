$(document).ready(function initialized() {
  $('.slide').on('click', function slideNext() {
    $(this).toggleClass('glyphicon-menu-left');
    $(this).next().slideToggle();
  })
});


// ======== Thursday Class Note

foo();

function foo() {
  return 1;
}

var x = 1;
// declaration: var x; << hoisted to the top
// assignemnt: x = 1; << stay in place

// Variable hoisting: (declaration hoisting) 

// ========================
// try catch exercise

var firstName = prompt('First Name');
var lastName = prompt('Last Name');


// name is valid: contains no numbers AND contains no spaces
// name is invalid: contains numbers OR contains spaces
function invalidName(string) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ' || typeof string[i] === 'number') {
      return true;
    }
  }
  return false;
}

// same as
var x = function validateName(firstName, lastName) {
  // validateName('Amy', 'Hua') => alert 'Amy Hua';
  // only valid name is your own name
  try {
    if (invalidName(firstName) || invalidName(lastName)) {
     // invalid
     throw 'This is invalid!';
    } else {
      alert(firstName + ' ' + lastName);
    }

    // test here
    // throw goes here
  } catch(errorMessage) {
    // message here
    alert(errorMessage);
  }
};

x(firstName, lastName);

function evenOdd(x) {
  if (isNaN(x) || x % 1 !== 0) {
    throw 'Not valid!'
  }
  // x is a valid number
  if (x % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

evenOdd(5); // => 'odd'
evenOdd(2); // => 'even'
evenOdd('adfasdfadsf'); // throw a custom error
evenOdd(2.234234234); // throw an error

// isNaN('adfadsf') === true
// isNaN('2') === false

// exercise 2:
evenOdd('asdfadsf'); // alert an error



// 1. if it's valid input, alert full name
// 2. if it's invalid input ** alert the error

// contrapositive statement:
//    A iff B, equivalent to not A iff not B
//    valid = (first name is Amy && last name is Hua)
//    invalid = 
// invalid: 

// raining = cloudy && grey
// not raining = not cloudy OR not grey

if (firstName === 'Amy' && lastName === 'Hua') {
  return 'valid';
}

if (firstName !== 'Amy' || lastName !== 'Hua') {
  return 'invalid';
}

function validateName(firstName, lastName) {
  // validateName('Amy', 'Hua') => alert 'Amy Hua';
  // only valid name is your own name
  try {
    if (firstName !== 'Amy' || lastName !== 'Hua') {
     // invalid
     throw 'This is invalid!';
    } else {
      alert(firstName + ' ' + lastName);
    }

    // test here
    // throw goes here
  } catch(errorMessage) {
    // message here
  }
}
