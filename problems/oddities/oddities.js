var readline = require('readline')
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

let input = []

rl.on('line', function (line) {
  input.push(line)
})

rl.on('close', () => {
  const numbers = input.slice(1)

  numbers.map(x => console.log(x%2 ? `${x} is even` : `${x} is odd`))
})
