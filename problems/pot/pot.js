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

  const result = input.reduce((result, line) => {
    const exponent = +line.charAt(line.length - 1)
    const base = +line.slice(0, line.length - 1)

    return result + base ** exponent
  }, 0)

  console.log(result)
})
