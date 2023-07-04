var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split(' ')

a = lines[0]
b = lines[1]
c = lines[2]

delta = Math.pow(b,2)-(4 * a * c)

if(delta < 0 || a <=0){
    console.log("Impossivel calcular")
}
else{
    console.log(`R1 =`, ((-b + Math.pow(delta, 0.5))/(2*a)).toFixed(5))
    console.log(`R2 =`, ((-b - Math.pow(delta, 0.5))/(2*a)).toFixed(5))
}