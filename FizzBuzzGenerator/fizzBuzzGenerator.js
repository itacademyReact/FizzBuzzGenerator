const fizzBuzzGenerator = (num) => {

  if(num % 3 == 0) return 'fizz'
  return num.toString()
}

module.exports = fizzBuzzGenerator;