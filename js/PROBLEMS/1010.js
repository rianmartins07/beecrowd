var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var a = lines.shift().split(' ')
var b = lines.shift().split(' ')
console.log("VALOR A PAGAR: R$", ((parseFloat(a[1])*parseFloat(a[2]))+(parseFloat(b[1])*parseFloat(b[2]))).toFixed(2))
