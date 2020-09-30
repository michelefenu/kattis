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
  const lines = input.slice(1).map(x => +x)

  lines.map(x => {
    const factorial = `${fact(x)}`
    console.log(factorial.slice(factorial.length - 1))
  })
})

function fact (x) {
  if (x === 1) return x

  return x * fact(x - 1)
}
