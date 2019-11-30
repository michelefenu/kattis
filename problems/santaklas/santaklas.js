var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function (line) {
    const h = +line.split(' ')[0];
    const v = +line.split(' ')[1];

    let answer = 'safe';

    if (v > 180) {
        answer = h / Math.abs(Math.cos(toRadians(v) + Math.PI / 2));
        answer = Math.floor(answer);
    }

    console.log(answer);
});

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
