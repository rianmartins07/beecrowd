var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
lines = lines.map(x => parseInt(x))

function matriz(n) {
    let i, j
    let m = []
    for (i=0;i<n;i++){
      let l = []
        for(j=0;j<n;j++){
            l.push(0)
        }
        m.push(l)
    }
    for (i=0;i<n;i++){
      m[i][i] = 2
    }
    for (i=0;i<n;i++){
      m[i][n-1-i]=3
    }

    for (i=parseInt(n/3);i<(n-parseInt(n/3));i++){
        for(j=parseInt(n/3);j<(n-parseInt(n/3));j++){
          m[i][j] = 1
        }
    }
    m[parseInt(n/2)][parseInt(n/2)]=4

    for (i=0;i<n;i++){
      s = ''
      for(j=0;j<n;j++){
        s += m[i][j]
      }
      console.log(s)
    }
    console.log()
}

let n
while (n = lines.shift()){
        matriz(n)
}