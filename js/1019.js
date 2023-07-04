var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
a = lines.shift()

h = Math.floor(a/3600)
a -= h*3600
m = Math.floor(a/60)
a -= m*60
console.log(`${h}:${m}:${a}`)