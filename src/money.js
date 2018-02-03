// @flow
import Dollar from './dollar'

class Money {
  amount: number
  // times(multiplier: number): Money {}

  equals(object: Money): boolean {
    const money: Money = object
    return this.amount === money.amount
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount)
  }
}

export default Money
