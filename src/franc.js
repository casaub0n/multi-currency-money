// @flow
import Money from './money'

class Franc extends Money {
  constructor(amount: number) {
    super()
    this.amount = amount
  }

  times(multiplier: number) {
    return new Franc(this.amount * multiplier)
  }
}

export default Franc
