var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const input = [];

rl.on('line', function (line) {
    input.push(+line);
});

rl.on('close', () => {
    const megaBytesInTimeSpan = input[0] * (input[1] + 1);
    const usedMegabytes = input
        .slice(2)
        .reduce((x, y) => x + y, 0);

    console.log(megaBytesInTimeSpan - usedMegabytes);
});
