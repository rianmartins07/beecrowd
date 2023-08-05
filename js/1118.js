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
        console.log('media = ' + (cont/2).toFixed(2))
        while (1){
            console.log("novo calculo (1-sim 2-nao)");
            cal = lines.shift()
            if (cal == 1){
                i=0;
                cont=0;
                break;
            }else if (cal==2){
                return 0;
            }
        }
    }
}