
function divisibleByTwo(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

// what is the result of divisibleByTwo(2)? divisibleByTwo(15)? divisibleByTwo(0)?

// ----

function divisibleByThree(number) {
  var result;
  if (number % 3 === 0) {
    result = true;
  } else {
    result = false;
  }
  // EVERY FUNCTION REQUIRES A RETURN STATEMENT
  return result;
  // A RETURN STATEMENT EXITS THE FUNCTION
  // EVERYTHING BELOW IT DOES NOT GET CALLED
}

divisibleByThree(3); // => undefined

function sum(x,y) {
  return
  {
    sum: x+y
  }
}

// this returns undefined!


// unfortunately, the above function is missing something.
// divisibleByThree(3) returns undefined.
// what is it missing?

// ----

// write a function that takes 2 numbers and gives the smaller number.

function min(x, y) {
  // fill in contents here
  return x > y ? y : x; // (condition) ? value_if_true : value_if_false
}

min(3, 0); // => 3
min(10, 5); // => 5
min(5, 5); // => 5
min(3, 99); // => 3

// ----
// write a function that determines if a number is 3

function isThree(number) {
  return number === 3;
}

isThree(3); // => true
isThree(4); // => false
isThree(); // => false
isThree('foo'); // => false

// ----
// write a function that determines if a number is another number
function isNumber(number1, number2) {
  // determines if number2 is number1
  return number1 === number2;
}

isNumber(3, 3); // => true
isNumber(1, 2); // => false
isNumber(3, 33); // => false
isNumber(3, 0.3); // => false
isNumber(Infinity, Infinity); // => true

// ----
// write a function that determines if a number is a multiple of 3

function isMultipleOfThree(number) {
  return number % 3 === 0;
}

isMultipleOfThree(3); // => true
isMultipleOfThree(5); // => false
isMultipleOfThree(12); // => true

// ----
// write a function that determines if a number is a multiple of another number

function isMultipleOf(multiple, number) {
  return number % multiple === 0;
}

isMultipleOf(3, 3); // => true
isMultipleOf(3, 10); // => false, 10 is not a multiple of 3
isMultipleOf(5, 10); // => true, 10 is a multiple of 5 (5 * 2 = 10)
isMultipleOf(3, 12); // => true
isMultipleOf(5, 12); // => false
isMultipleOf(4, 12); // => true

// ----
// write a function that determines if a number is a factor of 10
// (note: factors of 10 include 1, 10, 2, and 5)

function isFactorOf10(number) {

}

isFactorOf10(10); // => true
isFactorOf10(2); // => true
isFactorOf10(3); // => false
isFactorOf10(13); // => false

// ----
// write a function that determines if a number is a factor of another number

function isFactorOf(num1, num2) {

}

isFactorOf(10, 2); // => true
isFactorOf(10, 3); // => false
isFactorOf(33, 3); // => true
isFactorOf(11, 3); // => false
isFactorOf(13, 13); // => true

// ----
// write a function that determines if a color is a primary color
// (a primary color is a color that is 'red', 'blue', or 'yellow')

function isPrimaryColor(color) {
  return color === 'red' || color === 'blue' || color === 'yellow';
}

isPrimaryColor('purple'); // => false
isPrimaryColor('blue'); // => true
isPrimaryColor('cyan'); // => false
isPrimaryColor('red'); // => true

// ----
// write a function that takes two primary colors and gives its mixed color
// if one of the colors is not a primary color, don't return anything
// secondary colors include: purple, green, orange, and the primary colors
function secondaryColor(color1, color2) {
  if (!isPrimaryColor(color1) || !isPrimaryColor(color2)) {
    return;
  }
  // is primary colors
  if ((color1 ==='red' && color2 === 'yellow') || (color2 ==='red' && color1 === 'yellow')) {
    return 'orange';
  } else if ((color1 == 'red' && color2 === 'blue') || (color2 == 'red' && color1 === 'blue')) {
    return 'purple';
  } else if (color1 === 'red' && color2 === 'red') {
    return 'red';
  }
}

secondaryColor('red', 'blue'); // => 'purple'
secondaryColor('blue', 'red'); // => 'purple'
secondaryColor('blue', 'yellow'); // => 'green'
secondaryColor('yellow', 'yellow'); // => 'yellow'
secondaryColor('blue', 'blue'); // => 'blue'
secondaryColor('blue', 'yellow'); // => 'green'
secondaryColor('yellow', 'red'); // => 'orange'


// try and write this in as few lines as possible

// ----
// write a function that takes two colors (that are either secondary or primary),
// and blends them
// NOTE that a secondary color blended with a color that is
// already part of the secondary color (e.g., blue is already part of purple)
// is just the same color.
// Also assume that two secondary colors combined together always produces brown
// and that brown mixed with ANY other color is always brown

// Assume there is no such thing as yellow-orange, blue-green, etc.

function isPartOfSecondaryColor(secondaryColor, primColor) {
  // check if primColor is part of the secondaryColor
  if (secondaryColor === 'purple') {
    return primColor === 'blue' || primColor === 'red';
  } else if (secondaryColor === 'orange') {
    return primColor == 'red' || primColor === 'yellow';
  }
  // green
}

function blend(burgers, fries) {
  if (burgers === 'brown' || fries === 'brown') {
    return 'brown';
  }
  // none of the colors are brown 
  if (isPrimaryColor(burgers) && isPrimaryColor(fries)) {
    return secondaryColor(burgers, fries);
  }
  // one of the color is a secondary color
  if (isPrimaryColor(burgers)) {
    // is burgers part of fries?
    // fries is a secondary color
    // fries: purple
    // burgers: blue
    if (isPartOfSecondaryColor(fries, burgers)) {
      return fries;
    } else {
      return 'brown';
    }
  } else {
    // primary color is fries, secondary color is burgers
    // burgers: purple
    // fries: blue
    if (isPartOfSecondaryColor(burgers, fries)) {
      return burgers;
    } else {
      return 'brown';
    }
  }
}

blend('green', 'red'); // => brown
blend('green', 'yellow'); // => green

blend('blue', 'purple'); // => purple
blend('purple', 'blue'); // => purple
blend('yellow', 'green'); // => green
blend('green', 'yellow'); // => green
blend('red', 'green'); // => brown
blend('green', 'red'); // => brown





blend('purple', 'yellow'); // => brown
blend('green', 'purple'); // => brown
blend('orange', 'green'); // => brown
blend('green', 'purple'); // => brown
blend('brown', 'purple'); // => brown
blend('brown', 'red'); // => brown

// ----
// write a function that uses the functions `secondaryColor` and `blended`
// to blend 3 colors (primary or secondary) all together
// using the assumptions about color blending above

function multiblend(color1, color2, color3) {

}

multiblend('yellow', 'green', 'blue'); // => green
multiblend('yellow', 'purple', 'purple'); // => brown
multiblend('red', 'yellow', 'blue'); // => brown
multiblend('yellow', 'red', 'blue'); // => brown
multiblend('brown', 'red', 'yellow'); // => brown
multiblend('purple', 'purple', 'blue'); // => purple

function multiblend2(arrayOfColors) {
  // return the blend based on the array of colors
  // the array can be any number of colors.
}

// TODO: look into
function loopArray(array) {
  for (var i = 0; i < array.length; i++) {
    array.push(1);
  }
  return array;
}

// ====

var persons = [{
  name: 'amy',
  hasPet: false
}, {
  name: 'tom',
  hasPet: true
}, {
  name: 'jack',
  hasPet: false
}, {
  name: 'jill',
  hasPet: true
}];

function printPersons(persons) {
  for (var i = 0; i < persons.length; i++) {
    var person = persons[i];
    // {name: "amy", hasPet: false}
    if (person.hasPet) {
      console.log(person.name + ' has a pet');
    } else {
      console.log(person.name + ' does not have a pet');
    }
  }  
}

printPersons(persons);

// amy does not have a pet
// tom has a pet
// ...



// ----

var bike = {
  tires: ['tire 1', 'tire 2', 'tire 3'],
  replaceTire: function(tireIndex, newTire) {
    this.tires[tireIndex] = newTire;
  }
}

function replaceTire(tireIndex, newTire) {
  this.tires[tireIndex] = newTire;
}

bike.replaceTire(1, undefined);
// what is the result of the following 2 statements?
console.log(bike.tires[1]);

console.log(bike.tires);

// using bike.replaceTire, replace the tires so that
// bike.tires = ['new tire 1', 'new tire 2', 'new tire 3'];

// create a new method on `bike`, called `addTire`, that adds a new tire

bike.addTire('new tire 4');
// so that
console.log(bike.tires); // => ['new tire 1', 'new tire 2', 'new tire 3', 'new tire 4']

// ----

