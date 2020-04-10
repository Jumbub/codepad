let input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const read = () => input.shift();
const readInt = () => parseInt(read());
const readInts = () => read().split(' ').map(n => parseInt(n));
const print = console.log;

const solution = () => {
  const c = readInt();
  for (let ci = 1; ci <= c; ci++) {
    const n = readInt();

    let words = [];
    for (let w = 0; w < n; w++) {
      words.push(read());
    }

    const result = words.join(' ');

    print(`Case #${ci}: ${result}`);
  }
};

solution();
