const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (a) => {
  rl.question('', (b) => {
    const resultado = parseInt(a) + parseInt(b);
    console.log("X = " + resultado);
    rl.close();
  });
});
