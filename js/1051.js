var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split(' ')

e = parseFloat(lines[0])

if (e <= 2000) {
    console.log("Isento");
    return 0;
}
if (e <= 3000) {
    j = (e - 2000) * 0.08;
}
else if (e <= 4500) {
    j = (1000 * 0.08) + (e - 3000) * 0.18;
}
else if (e > 4500) {
    j = (1000 * 0.08) + ((1500) * 0.18) + ((e - 4500) * 0.28);
}

console.log("R$ "+ j.toFixed(2) +"");