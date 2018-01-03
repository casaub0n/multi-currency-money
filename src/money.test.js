import Dollar from './dollar'

test('Dollar five', () => {
  const five = new Dollar()
  let product = new Dollar()
  product = five.times(2)
  expect((product.amount).toBe(10))
  product = five.times(3)
  expect((product.amount).toBe(15))
})
