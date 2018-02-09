import Money from './money'
import Dollar from './dollar'
import Franc from './franc'

test('Multiplication', () => {
  const five = Money.dollar(5)
  expect(five.times(2)).toEqual(new Dollar(10))
  expect(five.times(3)).toEqual(new Dollar(15))
})

test('Equality test', () => {
  expect((Money.dollar(5)).equals(Money.dollar(5))).toBeTruthy()
  // expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy()
  // expect((Money.dollar(5)).equals(Money.dollar(6)).toBeFalsy()
  // expect(Money.franc(5).dollar(5).equals(Money.franc(5).dollar(5))).toBeTruthy()
  // expect(Money.franc(5).dollar(5).equals(Money.franc(6).dollar(6))).toBeFalsy()
})

test('Franc Multiplication test', () => {
  const five = new Franc(5)
  expect(five.times(2)).toEqual(new Franc(10))
  expect(five.times(3)).toEqual(new Franc(15))
})

// test('＄とフランの価値が間違っているかのテスト', () => {
//   expect(new Franc(5).equals(new Dollar(5))).toBeFalsy()
// })
