var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
l = parseInt(lines.shift())
s = lines.shift()
m = []
for (i=0;i<12;i++){
    linha = []
    for (j=0;j<12;j++){
        linha.push(parseFloat(lines.shift()))
    }
    m.push(linha)
}

let soma = 0
for (let j=0;j<12;j++){
    soma += m[j][l]
}

if (s=='S'){
    console.log(soma.toFixed(1))
}else if (s=='M'){
    console.log((soma/12).toFixed(1))
}