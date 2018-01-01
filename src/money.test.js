import Dallar from './dallar'

test('Dallar five', () => {
  const five = new Dallar()
  five.times(2)
  expect((five.amout).toBe(10))
})
