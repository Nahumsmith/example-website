// jQuery function: $
window.jQuery = window.$ = jQuery;

// jquery element vs "raw DOM element"
// raw DOM element: DOM methods
document.getElementById('title').innerHTML;
document.getElementById('title').classList;

// jquery element: jquery methods
$('#title').html();
$('#title').attr('class');

// examples of jquery elements ----
// argument takes a CSS selector as a string
$('#header'); // select the element with an ID of 'header'
$('li');      // select all list items on the page
$('ul li');   // select list items that are in unordered lists
$('.person'); // select all elements with a class of 'person'

// create a jQuery object from a DOM element
$(document.body.children[0]);

// create a jQuery object from a list of DOM elements
$([ window, document ]);

// make a selection in the context of a DOM element
var firstBodyChild = document.body.children[0];
$('li', firstBodyChild);

// make a selection within a previous selection
var paragraph = $('p');
$('a', paragraph);

// jQuery selection returns an array of HTML nodes
var listItems = $('li');
var rawListItem = listItems[0]; // or listItems.get(0)
var html = rawListItem.innerHTML;

// --- empty selection returns [], not undefined/null
if ($('#nonexistent')) {
  // Wrong! This code will always run!
}

if ($('#nonexistent').length > 0) {
  // Correct! This code will only run if there's an element in your page
  // with an ID of 'nonexistent'
}

// --- setter methods (sets new value)

$('<p class="greet">Hello!</p>'); // creates a new <p> with content and class
$('li').html('New HTML'); // sets html of ALL list items selected
$('li').html(function(index, oldHtml) {
  return oldHtml + '!!!'
});
$('input[type="text"]').val('new value');
$('a').attr('title', 'Click me!');
$('li').addClass('active'); // adds class 'active' to class list of ALL list items
// setting styles
$('p#main').css('font-size', '14px');
$('p#main').css({
  'font-size': '14px',
  'padding-bottom': '1em'
});

// effects
// see http://jqfundamentals.com/chapter/effects
$('.hide').hide();
$('.show').show();
$('.slide-down').slideDown();
$('.slide-up').slideUp();
$('.fade.in').fadeIn();
$('.fade.out').fadeOut();

// --- chaining: jquery setter methods are chainable
$('li').addClass('active').html('New HTML').attr('title', 'new title');

// --- traversion
$('li').children('a').next().next();
$('li').children('a').next().next().parent().find('span');


// ----- events


/*

Native Event Name     Shorthand Method
-----------------     ----------------
click                 .click()
keydown               .keydown()
keypress              .keypress()
keyup                 .keyup()
mouseover             .mouseover()
mouseout              .mouseout()
mouseenter            .mouseenter()
mouseleave            .mouseleave()
scroll                .scroll()
focus                 .focus()
blur                  .blur()
resize                .resize()

*/

$('li').on('click', function(event) {
  // do stuff on click
});
// the callback above (second argument of $('li').on(...))
// is called the click handler

// example
$( 'li' ).on( 'click', function() {
  console.log( 'a list item was clicked' );
});


// note: you can pass named functions like so:
var handleClick = function() {
  console.log( 'something was clicked' );
};

$('li').on( 'click', handleClick);

var lis = document.getElementsByTagName('li');
lis[0].onclick = handleClick;


// note: will apply to all 'li' elements that was selected at the point
// where $('li') was invoked. But will NOT apply to other 'li' elements

// if you want it to apply to other 'li' in the future, or be removed from
// removed li in the future

// event delegation:
$( '#my-unordered-list' ).on( 'click', 'li', function( event ) {
  console.log( this ); // logs the list item that was clicked
});

$( '<li>a new list item!</li>' ).appendTo( '#my-unordered-list' );


// you can access `this` inside the callback
// `this` = the event target (raw DOM element)
// (note: `this` is specific to the callback, not any functions inside of it (context gets changed))

// accessing the event object:
// - it's passed as the argument to the callback
// - it has the same event methods as events on the DOM
$('li').on('mouseenter', function(event) {
  console.log('mouseenter on a list item with text', $(this).text());
});

// demo: event.preventDefault() -- prevents default browser behavior of clicking on the element
$('a').on('click', function(e) {
  e.preventDefault();
  // now clicking on <a href="#">...</a> won't scroll to the top
});


// programmatically trigger the event handler:
$('li').trigger('click');
$('li').click(); // << -- shorthand

// attaching a click handler is called BINDING THE CLICK EVENT
// you can UNBIND the event using off(...)
$( 'li' ).off('click'); // now clicking on a list item does nothing


// ---- namespacing event handlers
// namespacing an event handler by using '<event name e.g. "click">.<custom name>'
// as the first argument for the event name
$( 'li' ).on( 'click.logging', function() {
  console.log( 'a list item was clicked' );
});

$( 'li' ).on( 'click.analytics', function() {
  registerClick();
  doSomethingElse();
});

// so you can do something like this
$( 'li' ).off( 'click.logging' ); // will turn off the click.logging click handler,
// but will not turn off the click.analytics click handler

// --- also possible:
// - binding to multiple events to the same event handler
// - binding an event handler to elements as they are added or removed from the DOM,
//    instead of just the elements you first selected

// ----- document ready: put your code in a document-ready callback

$(document).ready(function() {
  console.log('ready!');
});

// shortcut (alias):

$(function() {
  console.log('ready!');
});

// ---- resources
// http://jqfundamentals.com/
