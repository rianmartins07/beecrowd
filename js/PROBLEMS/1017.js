var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
a = lines.shift()
b = lines.shift()

console.log((a*b/12).toFixed(3))