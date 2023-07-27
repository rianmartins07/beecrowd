var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
e=lines.shift().split(' ')
n1 = parseFloat(e[0]*2)
n2 = parseFloat(e[1]*3)
n3 = parseFloat(e[2]*4)
n4 = parseFloat(e[3]*1)

media = (n1+n2+n3+n4)/10;

console.log(`Media: ${media.toFixed(1)}`);
if (media >= 7.0){
console.log("Aluno aprovado.");
}
else if (media < 5.0){
console.log("Aluno reprovado.");
}
else{
console.log("Aluno em exame.");
n = parseFloat(lines.shift())
console.log(`Nota do exame: ${n.toFixed(1)}`);
media=(media+n)/2;
if (media >= 5){
    console.log("Aluno aprovado.");
}
else{
    console.log("Aluno reprovado.");
}
console.log(`Media final: ${media.toFixed(1)}`);
}