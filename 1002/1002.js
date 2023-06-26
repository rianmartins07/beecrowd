var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var r = parseFloat(lines.shift())
console.log("A="+ (3.14159*(r*r)).toFixed(4))


