var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function (line) {
    let n = +line;

    for(let i=1; i<=n; i++) {
        console.log(`${i} Abracadabra`);
    }
});
