import Dollar from './dollar'

test('Dollar five', () => {
  const five = new Dollar()
  five.times(2)
  expect((five.amout).toBe(10))
})
