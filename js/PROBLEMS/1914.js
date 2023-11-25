var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
n = parseInt(lines.shift())
for(i=0;i<n;i++){
    e = lines.shift().split(' ')
    n1 = e[0];
    n2 = e[2];
    r1 = e[1];
    r2 = e[3];
    e2 = lines.shift().split(' ')
    v1 = parseInt(e2[0]);
    v2 = parseInt(e2[1]);
    res = v1 + v2;

    if (res%2==0){
        if(r1 == "PAR"){
            console.log(n1);
        }else{
            console.log(n2);
        }
    } else{
        if(r1 == "IMPAR"){
            console.log(n1);
        }else{
            console.log(n2);
        }
    }
}