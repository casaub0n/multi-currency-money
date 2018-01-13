// @flow
import Money from './money'

class Dollar extends Money {
  times(multiplier: number) {
    return new Dollar(this.amount * multiplier)
  }

  equals(object: any) {
    return this.amount === object.amount
  }
}

export default Dollar
