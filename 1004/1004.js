var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var a = parseFloat(lines.shift())
var b = parseInt(lines.shift())


console.log("PROD = "+(a*b))


