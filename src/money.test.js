import Dollar from './dollar'

test('Multiplication five', () => {
  const five = new Dollar(5)
  expect(five.times(2)).toBe(new Dollar(10))
  expect(five.times(3)).toBe(new Dollar(15))
})

test('Equality test', () => {
  const e = new Dollar(5)
  expect(e.equals(new Dollar(5)))
})
