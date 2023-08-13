var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
i=0
g=0
ci=0
cg=0
q=0
e=0
qgren=0

while (1){
    j = lines.shift().split(' ')
    i = parseInt(lines[0])
    g = parseInt(lines[1])
    if (i>g){
        ci++;
    }else if (i<g){
        cg++;
    }else{
        e++;
    }
    qgren++;
    console.log("Novo grenal (1-sim 2-nao)");
    ngre = parseInt(lines.shift());
    if (ngre==2){
        console.log("%d grenais", qgren);
        console.log("Inter:%d", ci);
        console.log("Gremio:%d", cg);
        console.log("Empates:%d", e);
        if (ci>cg){
            console.log("Inter venceu mais");
        }else if (ci<cg){
            console.log("Gremio venceu mais");
        }else{
            console.log("Nao houve vencedor");
        }
        break;
    }
}