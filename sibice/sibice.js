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
    const numberOfMatches = +input[0].split(' ')[0];
    const w = +input[0].split(' ')[1];
    const h = +input[0].split(' ')[2];

    const maxSize = Math.sqrt(w * w + h * h);

    input
        .slice(1)
        .forEach(x => {
            console.log(x > maxSize ? 'NE' : 'DA');
        });
});
