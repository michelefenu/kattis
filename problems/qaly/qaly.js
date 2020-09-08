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
  input = input.splice(1)

  const totalQaly = input.reduce((totalQaly, line) => {
    const q = +line.split(' ')[0]
    const y = +line.split(' ')[1]

    return totalQaly + q * y
  }, 0)

  console.log(totalQaly)
})
