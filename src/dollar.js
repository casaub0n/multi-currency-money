// @flow

class Dollar {
  amount: number

  constructor(amount: number) {
    this.amount = amount
  }

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier)
  }

  equals(object: any) {
    return this.amount === object.amount
  }
}

export default Dollar
