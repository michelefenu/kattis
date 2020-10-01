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
  let logIndex = 1

  while (logIndex < input.length) {
    const numberOfLogs = +input[logIndex]
    const startIndex = logIndex + 1
    const endIndex = startIndex + numberOfLogs
    const cities = input.slice(startIndex, endIndex)

    const numberOfDifferentCities = [...new Set(cities)].length

    console.log(numberOfDifferentCities)

    logIndex = logIndex + numberOfLogs + 1
  }
})
