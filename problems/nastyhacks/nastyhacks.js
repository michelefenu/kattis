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
  const scenarios = input.slice(1)

  scenarios.map( scenario => {
    const r = scenario.split(' ')[0]
    const e = scenario.split(' ')[1]
    const c = scenario.split(' ')[2]

    const profitabilityIndex = r - (e - c)

    if(profitabilityIndex > 0) {
      console.log('do not advertise')
    } else if(profitabilityIndex === 0) {
      console.log('does not matter')
    } else {
      console.log('advertise')
    }
  })
})
