var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function (line) {
    console.log(printSolution(line));
});

function printSolution(line) {
    let shortAuthors = line
        .match(/[A-Z]/g)
        .join('');

    return(shortAuthors);
}

module.exports = {
    printSolution: printSolution
};
