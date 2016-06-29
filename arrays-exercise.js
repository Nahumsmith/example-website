// traverse a string, COUNT all the numbers found

function countString(string) {
  // string = '23andme32'
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (!isNaN(char)) {
      count++;
    }
  }
  return count;
}