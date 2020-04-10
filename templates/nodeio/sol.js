let lines = [];
require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false, // for automated tooling to work
}).on('line', function (line) {
  lines.push(line);
});
const print = console.log;
const read = async () =>
  new Promise(async resolve => {
    while (lines.length === 0) {
      await new Promise(r => setTimeout(r, 10));
    }
    resolve(lines.shift());
  });
const readInt = async () => parseInt(await read());
const readInts = async () => (await read()).split(' ').map(r => parseInt(r));

const solution = async () => {
  const c = await readInt();
  for (let ci = 1; ci <= c; ci++) {
    print(`Case #${ci}: `);
  }
};

solution();
