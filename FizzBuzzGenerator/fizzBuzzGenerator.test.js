const fizzBuzzGenerator = require('./fizzBuzzGenerator');

test('return 22 as string', () => {

  //Arrange
  const numberAsString = '22'

  //Act
  const resultExpect = fizzBuzzGenerator(22)

  //Asert
  expect(resultExpect).toBe(numberAsString)
});

test('return 8 as string', () => {

  //Arrange
  const numberAsString = '8'

  //Act
  const resultExpect = fizzBuzzGenerator(8)

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

test('return fizz passed 6', () => {

  //Arrange
  const fizz = 'fizz'

  //Act
  const resultExpect = fizzBuzzGenerator(6)

  //Asert
  expect(resultExpect).toBe(fizz)
});

test('return fizz passed 9', () => {

  //Arrange
  const fizz = 'fizz'

  //Act
  const resultExpect = fizzBuzzGenerator(9)

  //Asert
  expect(resultExpect).toBe(fizz)
});
