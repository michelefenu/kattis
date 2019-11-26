var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const problemInput = [];

rl.on('line', function (line) {
    problemInput.push(line);
});

rl.on('close', () => {

    const numberOfSticks = +problemInput[0];
    const stickLengths = problemInput[1]
        .split(' ')
        .map(x => BigInt(x))
        .sort((a, b) => a <= b ? -1 : 1);

    let isPossible = false;

    for (let i = numberOfSticks - 1; i >= 2 && !isPossible; i--) {
        if(stickLengths[i-2] + stickLengths[i-1] > stickLengths[i]) {
            isPossible = true;
        }
    }

    console.log(isPossible ? 'possible' : 'impossible');
});
