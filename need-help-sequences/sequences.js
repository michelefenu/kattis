var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function (line) {
    // Count '?' in string
    const k = (line.match(/\?/g) || []).length;
    
    // Compute combinations
    const combinations = Math.pow(2, k);

    // Replace '?' for all 2^k combinations
    let inputCombinations = [];

    for (let i = 0; i < combinations; i++) {
        let replacements = i.toString(2).padStart(k, '0').split('');
        let lineReplaced = line;

        for (let j = 0; j < replacements.length; j++) {
            lineReplaced = lineReplaced.replace('?', replacements[j]);
        }

        inputCombinations.push(lineReplaced);
    }

    // Sort and count steps
    let totalSteps = 0;
    inputCombinations.forEach((x) => {
        totalSteps = totalSteps + countBubbleSortSteps(x.split(''));
    });

    // Print the solution
    console.log(totalSteps % (Math.pow(10, 9) + 7));
});

function countBubbleSortSteps(inputArr) {
    let steps = 0;
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
                steps = steps + 1;
            }
        }
    } while (swapped);

    return steps;
}