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
  const temperatures = input[1]

  const coldDays = temperatures.split(' ').filter(x => x < 0).length

  console.log(coldDays)
})
