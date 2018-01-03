import Dollar from './dollar'

test('Dollar five', () => {
  const five = new Dollar()
  five.times(2)
  expect((five.amount).toBe(10))
})
