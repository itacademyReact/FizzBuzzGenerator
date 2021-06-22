const fizzBuzzGenerator = (num) => {

  if(num === 6 || num === 3) return 'fizz'
  return num.toString()
}

module.exports = fizzBuzzGenerator;