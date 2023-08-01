var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

lines = lines.map(function(item){
    return item
})

for (i=0;i<lines.length;i++){
    x=lines[i][0]
    y=lines[i][1]

    if (lines[i] !== '2002'){
        console.log('Senha Invalida')
    }else{
        console.log("Acesso Permitido")
        break;
    }
}