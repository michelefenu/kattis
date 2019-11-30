var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function (line) {
    const numberOfStones = +line;

    const winner = numberOfStones % 2 === 0 ? 'Bob' : 'Alice';

    console.log(winner);
});
