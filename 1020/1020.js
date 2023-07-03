var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
e = lines.shift()

a = Math.floor( e/365);
e -= a*365;
m = Math.floor( e/30);
e -= m*30;
console.log(`${a} ano(s)`)
console.log(`${m} mes(es)`)
console.log(`${e} dia(s)`)

