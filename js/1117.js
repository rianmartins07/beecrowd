var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')
i=0
cont=0

while (1){
    x = parseFloat(lines.shift())

    if(x>=0 && x<= 10){
        cont+=x
        i++;
    }else{
        console.log('nota invalida')
    }
    if (i==2){

        console.log('media = ' + (parseFloat(cont)/2).toFixed(2))
        return
    }
}