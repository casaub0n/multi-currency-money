import Dollar from './dollar'

test('Multiplication five', () => {
  const five = new Dollar(5)
  expect(five.times(2)).toEqual(new Dollar(10))
  expect(five.times(3)).toEqual(new Dollar(15))
})

test('Equality test', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
  expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
})
