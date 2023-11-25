var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
mega = 0
res = 0
while (1){
    p = lines.shift().trim()
    if (p.length > 3){
        console.log(mega+'')
        res +=1
        mega = 0
    }
    if (res==3){
        break
    }else{
        for (i=0;i<p.length;i++){
            if (p[i] == '*'){
                mega += Math.pow(2, parseInt(p.length-i-1))
            }
        }
    }
}

