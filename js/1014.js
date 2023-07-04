var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let a = parseFloat(lines.shift())
let b = parseFloat(lines.shift())

let result = a/b
console.log(result.toFixed(3) + " km/l")