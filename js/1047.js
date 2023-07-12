var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split(' ')

hi = parseInt(lines[0])
mi = parseInt(lines[1])
hf = parseInt(lines[2])
mf = parseInt(lines[3])


if (hi > hf){
    r_h = 24 - (hi-hf);
}else if (hi < hf){
    r_h = hf - hi;
}
else if (hi == hf){
    r_h = 24;
}
if (mi > mf){
    r_m = 60 - (mi-mf);
    r_h -= 1;
}else if (mi < mf){
    r_m = mf - mi;
    if (hi == hf){
        r_h -=24;
    }
}
else if (mi == mf){
    r_m = 0;
}

console.log("O JOGO DUROU "+r_h+" HORA(S) E "+r_m+" MINUTO(S)");

