import Dollar from './dollar'

test('Dollar five', () => {
  const five = new Dollar(5)
  let product = new Dollar()
  product = five.times(2)
  expect(product.amount).toBe(10)
  product = five.times(3)
  expect(product.amount).toBe(15)
})

test('Equality test', () => {
  const e = new Dollar(5)
  expect(e.equals(new Dollar(5)))
})
