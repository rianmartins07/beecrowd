var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')
e = parseInt(lines[0])

dict = {
    'R':0,
    'S':0,
    'C':0,
}

for (i=1;i<=e;i++){
    a = lines[i].split(' ')
    dict[a[1]] += parseInt(a[0])
}
total=0
for (const chave in dict){
    total+=dict[chave]
}

console.log(`Total: ${total} cobaias`)
console.log(`Total de coelhos: ${dict['C']}`)
console.log(`Total de ratos: ${dict['R']}`)
console.log(`Total de sapos: ${dict['S']}`)
console.log(`Percentual de coelhos: ${((dict['C']*100)/total).toFixed(2)} %`)
console.log(`Percentual de ratos: ${((dict['R']*100)/total).toFixed(2)} %`)
console.log(`Percentual de sapos: ${((dict['S']*100)/total).toFixed(2)} %`)