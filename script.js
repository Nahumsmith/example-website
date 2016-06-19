var colors = ['#fff', 'red', 'orange', 'green', 'blanchedalmond', 'blueviolet'];

function randomColor() {
  var numColors = colors.length;
  // floor: 1.323 -> 1, 10.34234 -> 10, 3 -> 3
  var colorIndex = Math.floor(Math.random() * numColors);
  return colors[colorIndex];
}

function changeBackground(event) {
  console.log('event', event);
  var x = Math.floor(Math.random() * 255),
    y = Math.floor(Math.random() * 255),
    z = Math.floor(Math.random() * 255);
  document.getElementsByTagName('body')[0].style.background = 'rgb(' 
    + x + ',' + y + ',' + z +')';
}

document.getElementById('color-me').onclick = changeBackground;

// is same as
document.getElementById('color-me').addEventListener('click', changeBackground);

// https://developer.mozilla.org/en-US/docs/Web/Events

document.getElementById('drag-me').addEventListener('dragend', function(e){
  console.log('dragged!', e);
  e.target.style.left = e.screenX;
  e.target.style.top = e.screenY;
});