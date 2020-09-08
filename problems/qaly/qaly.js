var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
});

rl.on('close', () => {
    console.log(input)
});
