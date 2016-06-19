// this is how you get a data attribute

// getting the value of [data-color] on the first element with class "color"
var firstColor = document.getElementsByClassName('color')[0].getAttribute('data-color');
console.log('Value of data-color is', firstColor);

// getting the value of [data-choice-number] on the first element with class "color"
var firstChoice = document.getElementsByClassName('color')[0].getAttribute('data-choice-number');
console.log('Value of data-choice-number is', firstChoice);

// note that the value is always a string!

// you can add to the classList

