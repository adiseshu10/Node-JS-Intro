const add = (num1, num2) => {
  console.log(`${num1} + ${num2} = ${num1 + num2}`)
}

const sub = (num1, num2) => {
  console.log(`${num1} - ${num2} = ${num1 - num2}`)
}

const multi = (num1, num2) => {
  console.log(`${num1} * ${num2} = ${num1 * num2}`)
}

const divide = (num1, num2) => {
  console.log(`${num1} / ${num2} = ${num1 / num2}`)
}

exports.add = add
exports.sub = sub
exports.multi = multi
exports.divide = divide
