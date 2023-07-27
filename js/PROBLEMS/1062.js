const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
let arr = [];
let pos = 0;
let t = 0;

const readInput = (i) => {
  const num = parseFloat(lines[i]);
  arr[i] = num;
  if (num > 0) {
    pos++;
    t += num;
  }

  if (i === 5) {
    printResult();
  } else {
    readInput(i + 1);
  }
};

const printResult = () => {
  console.log(`${pos} valores positivos`);
  console.log((t / pos).toFixed(1));
};

readInput(0);
