// @flow

class Dollar {
  amount: number

  constructor(amout: number) {
    this.amount = amout
  }

  times(multiplier: number) {
    return new Dollar(this.amount *= multiplier)
  }
}

export default Dollar
