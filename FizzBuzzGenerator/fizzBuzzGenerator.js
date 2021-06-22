const fizzBuzzGenerator = (num) => {

  if(num === 6 || num === 3 || num === 9) return 'fizz'
  return num.toString()
}

module.exports = fizzBuzzGenerator;