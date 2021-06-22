
const isABuzzNumber = (num) => num % 5 === 0
const isAFizzNumber = (num) => num % 3 === 0

const fizzBuzzGenerator = (num) => {

  if(isABuzzNumber(num) && isAFizzNumber(num)) return 'fizzBuzz'

  if(isABuzzNumber(num)) return 'buzz'

  if(isAFizzNumber(num)) return 'fizz'
  
  return num.toString()
}

module.exports = fizzBuzzGenerator;