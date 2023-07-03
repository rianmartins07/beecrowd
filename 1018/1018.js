var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
a = lines.shift()
let string = ''
string += `${a}\n`;
string += `${Math.floor(a / 100)} nota(s) de R$ 100,00\n`;
a -= Math.floor(a / 100) * 100;
string += `${Math.floor(a / 50)} nota(s) de R$ 50,00\n`;
a -= Math.floor(a / 50) * 50;
string += `${Math.floor(a / 20)} nota(s) de R$ 20,00\n`;
a -= Math.floor(a / 20) * 20;
string += `${Math.floor(a / 10)} nota(s) de R$ 10,00\n`;
a -= Math.floor(a / 10) * 10;
string += `${Math.floor(a / 5)} nota(s) de R$ 5,00\n`;
a -= Math.floor(a / 5) * 5;
string += `${Math.floor(a / 2)} nota(s) de R$ 2,00\n`;
a -= Math.floor(a / 2) * 2;
string += `${Math.floor(a / 1)} nota(s) de R$ 1,00`;
a -= Math.floor(a / 1) * 1;

console.log(string);

