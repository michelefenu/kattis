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
  const n = input[0].split(' ')[0]
  const h = input[0].split(' ')[1]
  const v = input[0].split(' ')[2]
  const thickness = 4

  const maxHSide = n - h > n / 2 ? n - h : h
  const maxVSide = n - v > n / 2 ? n - v : v

  const maxArea = maxHSide * maxVSide * thickness

  console.log(maxArea)
})
