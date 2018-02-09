// @flow
import Dollar from './dollar'
import Franc from './franc'

class Money {
  amount: number
  // times(multiplier: number): Money {}

  equals(object: Money): boolean {
    const money: Money = object
    return this.amount === money.amount
  }

  static dollar(amount: ?number): Dollar {
    if (amount != null) return new Dollar(amount)
    return new Dollar(0)
  }

  static franc(amount: ?number): Franc {
    if (amount != null) return new Franc(amount)
    return new Franc(0)
  }
}

export default Money
