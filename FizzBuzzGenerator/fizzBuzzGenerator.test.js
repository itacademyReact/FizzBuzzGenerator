const fizzBuzzGenerator = require('./fizzBuzzGenerator');

test('return 22 as string', () => {

  //Arrange
  const numberAsString = '22'

  //Act
  const resultExpect = fizzBuzzGenerator(22)

  //Asert
  expect(resultExpect).toBe(numberAsString)
});

test('return 24 as string', () => {

  //Arrange
  const numberAsString = '24'

  //Act
  const resultExpect = fizzBuzzGenerator(24)

  //Asert
  expect(resultExpect).toBe(numberAsString)
});

test('return 17 as string', () => {

  //Arrange
  const numberAsString = '17'

  //Act
  const resultExpect = fizzBuzzGenerator(17)

  //Asert
  expect(resultExpect).toBe(numberAsString)
});

test('return fizz passed 3', () => {

  //Arrange
  const fizz = 'fizz'

  //Act
  const resultExpect = fizzBuzzGenerator(3)

  //Asert
  expect(resultExpect).toBe(fizz)
});