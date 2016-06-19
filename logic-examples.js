// Q. when do you use multiple if statements?
// A. when you want to run multiple statements at a time
// if it meets multiple / all of the conditionals

function fizzbuzz(x) {
  var string = '';
  if (x % 3 === 0) {
    string += 'fizz';
  }
  if (x % 5 === 0) {
    string += 'buzz';
  }
  // when x is both divisble by 3 AND divisible by 5, both statements will run
  // --> string would be 'fizzbuzz' when it meets both conditions
  return string || x; // when string is empty (''), it will evalute to FALSE and return x
}

// if-else-if-elseif-....-else will cause only ONE statement to run
// and does not allow for multiple

function fizzbuzz2(x) {
  if (x % 3 === 0) {
    return 'fizz';
  } else if (x % 5 === 0) {
    return 'buzz';
  } else if (x % 3 === 0 && x % 5 === 0) {
    return 'fizzbuzz';
  } else {
    return x;
  }
}
// notice above that on evaluating fizzbuzz2(x),
// only ONE of those statements will ever be called

// multiple if statements allow for multiple statements to be called