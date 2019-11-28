var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const input = [];

rl.on('line', function (line) {
    input.push(line)
});

rl.on('close', function (line) {
    const numberOfZiplines = +input[0];
    const zipLineSpecs = input
        .slice(1)
        .map(x => x.split(' ').map(x => +x));

    zipLineSpecs.forEach(zipLineSpec => {
        const w = zipLineSpec[0];
        const g = zipLineSpec[1];
        const h = zipLineSpec[2];
        const r = zipLineSpec[3];

        const min = Math.sqrt(Math.pow(w, 2) + Math.pow(g - h, 2));
        const max = Math.sqrt(Math.pow(g + h - 2 * r, 2) + Math.pow(w, 2));

        console.log(min.toFixed(8), max.toFixed(8));
    });
});
