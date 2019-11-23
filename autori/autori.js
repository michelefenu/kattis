var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function (line) {
    let shortAuthors = line
        .match(/[A-Z]/g)
        .join('');

    console.log(shortAuthors);
});
