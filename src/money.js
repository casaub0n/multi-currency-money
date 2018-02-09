// @flow
import Dollar from './dollar'
// import Franc from './franc'

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

  // static franc(amount: number): Franc {
  //   return new Franc(amount)
  // }
}

export default Money
