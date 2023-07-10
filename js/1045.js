var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split(' ')
lines.sort()

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])
let c = parseFloat(lines[2])


if (a >= b + c)
{
    console.log("NAO FORMA TRIANGULO");
    return 0;
}
if (a * a == (b * b + c * c))
{
    console.log("TRIANGULO RETANGULO");
}
if (a * a > (b * b + c * c))
{
    console.log("TRIANGULO OBTUSANGULO");
}
if (a * a < (b * b + c * c))
{
    console.log("TRIANGULO ACUTANGULO");
}
if (a == b && b == c)
{
    console.log("TRIANGULO EQUILATERO");
}
else if (a == b || a == c || b == c)
{
    console.log("TRIANGULO ISOSCELES");
}
