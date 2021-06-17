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
