var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function (line) {
    const x = +line.split(' ')[0];
    const y = +line.split(' ')[1];
    const n = +line.split(' ')[2];

    for (let i = 1; i <= n; i++) {
        
        let answer = '';

        if (i % x === 0) {
            answer = 'Fizz';
        }

        if (i % y === 0) {
            answer = answer + 'Buzz';
        }

        if(!answer) {
            answer = i;
        }

        console.log(answer);
    }
});
