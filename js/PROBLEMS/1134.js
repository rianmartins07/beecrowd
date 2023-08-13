var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

let a = 0
let g = 0
let d = 0
while(1){
    i = lines.shift()

        if (i==1){
            a++;
        }else if(i==2){
            g++;
        }else if(i==3){
            d++;
        }else if(i==4){
            break;
        }

}

console.log("MUITO OBRIGADO");
console.log("Alcool: "+ a);
console.log("Gasolina: "+ g);
console.log("Diesel: "+ d);