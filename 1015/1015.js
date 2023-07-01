var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');
e1 = lines.shift().split(' ')
let x1 = parseFloat(e1[0])
let y1 = parseFloat(e1[1])

e1 = lines.shift().split(' ')
let x2 = parseFloat(e1[0])
let y2 = parseFloat(e1[1])

console.log(Math.pow((Math.pow (x2-x1, 2)) + (Math.pow (y2-y1, 2)), 0.5).toFixed(4))