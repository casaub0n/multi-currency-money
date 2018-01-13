// @flow
import Money from './money'

class Dollar extends Money {
  constructor(amount: number) {
    super()
    this.amount = amount
  }

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier)
  }

  equals(object: any) {
    const dollar: Money = (object: Dollar)
    return this.amount === dollar.amount
  }
}

export default Dollar
