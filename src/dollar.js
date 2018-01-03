// @flow

class Dollar {
  amount: number

  constructor(amout: number) {
    this.amount = amout
  }

  times(multiplier: number) {
    this.amount *= multiplier
  }
}

export default Dollar
