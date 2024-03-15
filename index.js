const calculator = require('./calculator')

const {add, sub, multi, divide} = calculator

const greetings = name => {
  console.log(`Hello ${name}`)
}

greetings('Raju')
greetings('Abhi')

add(6, 3)
sub(6, 3)
multi(6, 4)
divide(6, 3)
