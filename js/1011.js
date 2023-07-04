var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let a = parseFloat(lines.shift())


console.log("VOLUME =", ((4.0/3.0) * 3.14159 * Math.pow(a, 3)).toFixed(3))
