
const isABuzzNumber = (num) => num % 5 === 0
const isAFizzNumber = (num) => num % 3 === 0
const changeNumberAsString = (num) => num.toString()

const fizzBuzzGenerator = (num) => {

  if(isABuzzNumber(num) && isAFizzNumber(num)) return 'fizzBuzz'

  if(isABuzzNumber(num)) return 'buzz'

  if(isAFizzNumber(num)) return 'fizz'

  return changeNumberAsString(num)
}

module.exports = fizzBuzzGenerator;