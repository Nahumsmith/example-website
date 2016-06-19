console.log('this is javascript');

// semicolons
var x = 1;

x + 3;
var x = foo();

if (condition) {

}

// every opening bracket requires a closing bracket

if (brac) {
  // inside of an IF block, indent by 1
  // indented by 1
} else {

}

// block = {}

if (foo){
  return 'hello';
}

// section1
if (foo) {
  return 'hello'
}

if (foo) {
  return 'hello'
}

// section2
if (foo) {
  return 'hello'
}

if (foo) {
  return 'hello'
}



if(foo){}

if(foo)return 'hello'


if (foo) {
  if (bar) {
    if (baz) {
      return 'hello';
    }
  }
}


// no semicolons
if (foo && bar && baz) {
  return 'hello';
}

function() {
}

// semicolons
var x;
x + 3;

var x=3;
var x = 3; // 1 space between operators


var foo = ____;
var foo = function(){};


// invoke an anonymous function
(function() {
  console.log('this was invoked');
  return 'foo';
})();

var x;
x = x || 33;
x = 33;
console.log(x); // => 33

// named function
function nameHere() {
  return 'i am named!';
}

nameHere();


// -----------

var foo = 'bar';
function futureValue (principal, percentage, years){
  // indent inside statements by 1
  // percentage: value between 1 and 100
  var interest = percentage / 100;
  // variables inside functions are thrown away
  // as soon as the function is done executing
  // (that is, when the function returns something)
  return principal * Math.pow((1 + interest), years);
  // everything below the return statement, does not get called
  var foo = 'bar';
  nonsense % 10;
} // aligns with the word 'function'

futureValue(1000, 10, 5);
// interest = 10/100 = 0.1
// return 1000 * Math.pow((1 + 0.1), 5);

// putting fixed variables outside your function
var fixedAmount = 100;
function myNumber(P,i,y) {
  var fv = P*Math.pow((1+i),(y)) + fixedAmount;
  return fv;
}