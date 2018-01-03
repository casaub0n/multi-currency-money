// @flow

class Dollar {
  amount: number

  constructor(amout: number) {
    this.amount = amout
  }

  times(multiplier: number) {
    const a = new Dollar(this.amount *= multiplier)
    return a
  }
}

export default Dollar
