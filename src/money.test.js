import Dollar from './dollar'

test('Multiplication five', () => {
  const five = new Dollar(5)
  expect(five.times(2)).toEqual(new Dollar(10))
  expect(five.times(3)).toEqual(new Dollar(15))
})

test('Equality test', () => {
  const e = new Dollar(5)
  expect(e.equals(new Dollar(5)))
})
