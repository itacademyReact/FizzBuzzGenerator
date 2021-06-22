const fizzBuzzGenerator = (num) => {
  if(num % 5 === 0) return 'buzz'
  if(num % 3 === 0) return 'fizz'
  return num.toString()
}

module.exports = fizzBuzzGenerator;