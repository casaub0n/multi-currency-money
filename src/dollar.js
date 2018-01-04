// @flow

class Dollar {
  amount: number

  constructor(amount: number) {
    this.amount = amount
  }

  times(multiplier: number) {
    const a = new Dollar(this.amount * multiplier)
    return a
  }
}

export default Dollar
