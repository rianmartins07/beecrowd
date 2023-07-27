var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');
var a = lines.shift()
var b = parseInt(lines.shift())
var c = parseFloat(lines.shift())

console.log("TOTAL = R$", (b+(c*0.15)).toFixed(2))