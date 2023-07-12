var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split(' ')

e = parseFloat(lines[0])

if (e <= 400){
    r = e*0.15;
    p=15;
}
else if (e <= 800){
    r = e*0.12;
    p = 12;
}else if (e <= 1200){
    r = e*0.10;
    p=10;
}else if (e <= 2000){
    r = e*0.07;
    p=7;
}else if (e > 2000){
    r = e*0.04;
    p=4;
}


console.log("Novo salario: "+(e+r)+"");
console.log("Reajuste ganho: "+r+"");
console.log("Em percentual: "+p+" %");
