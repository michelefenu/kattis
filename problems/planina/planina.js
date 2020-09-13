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
  const iterations = +input
  let i = 0
  let totalLinePoints = 2

  while (i < iterations) {
    totalLinePoints = totalLinePoints * 2 - 1
    i = i + 1
  }

  console.log(totalLinePoints ** 2)
})
