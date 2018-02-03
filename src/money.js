// @flow

class Money {
  amount: number

  equals(object: Money): boolean {
    const money: Money = object
    return this.amount === money.amount
  }
}

export default Money
