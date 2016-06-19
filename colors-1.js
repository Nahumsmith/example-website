// on clicking an element with class "color",
// print the results of which color I clicked on
// as a string ('red', 'yellow', 'blue')
// in div#result element.
// the color text is in a data-color attribute on the color element.

// here's how you can get the value of [data-color] on the first element with class "color"
var firstColor = document.getElementsByClassName('color')[0].getAttribute('data-color');
console.log('Value of data-color is', firstColor);


// Challenge: say in the future, I will add
//   <div class="color purple" data-color="purple"></div>
//   <div class="color purple" data-color="orange"></div>
// .... and maybe some others
// to the list of color choices.
// write your code so that it works no matter how many color choices I put
