var fs = require('fs');
const autori = require('./autori');


describe('autori', () => {
    it('should run', () => {
        var problemInput = fs.readFileSync('problems/autori/data/autori.1.in', 'utf8').trim();
        var problemAnswer = fs.readFileSync('problems/autori/data/autori.1.ans', 'utf8').trim();
        const answer = autori.printSolution(problemInput);
        expect(answer).toEqual(problemAnswer);
    })
});