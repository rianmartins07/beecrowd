var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')


n = parseInt(lines.shift())

for (i=0;i<n;i++){
  e = lines.shift().split(' ')

  sheldon = e[0].trim()
  raj = e[1].trim()

  if (sheldon === raj) {
    console.log(`Caso #${i + 1}: De novo!`);
} else if (sheldon === "tesoura" && raj === "papel") {
    console.log(`Caso #${i + 1}: Bazinga!`);
} else if (sheldon === "tesoura" && raj === "lagarto") {
    console.log(`Caso #${i + 1}: Bazinga!`);
} else if (sheldon === "papel" && raj === "pedra") {
    console.log(`Caso #${i + 1}: Bazinga!`);
} else if (sheldon === "papel" && raj === "Spock") {
    console.log(`Caso #${i + 1}: Bazinga!`);
} else if (sheldon === "pedra" && raj === "tesoura") {
    console.log(`Caso #${i + 1}: Bazinga!`);
} else if (sheldon === "pedra" && raj === "lagarto") {
    console.log(`Caso #${i + 1}: Bazinga!`);
} else if (sheldon === "Spock" && raj === "pedra") {
    console.log(`Caso #${i + 1}: Bazinga!`);
} else if (sheldon === "Spock" && raj === "tesoura") {
    console.log(`Caso #${i + 1}: Bazinga!`);
} else if (sheldon === "lagarto" && raj === "Spock") {
    console.log(`Caso #${i + 1}: Bazinga!`);
} else if (sheldon === "lagarto" && raj === "papel") {
    console.log(`Caso #${i + 1}: Bazinga!`);
} else {
    console.log(`Caso #${i + 1}: Raj trapaceou!`);
}
}