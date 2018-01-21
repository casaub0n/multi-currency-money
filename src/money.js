// @flow

class Money {
  amount: number
  equals(object: any) {
    const money: Money = (object: Money)
    return this.amount === money.amount
  }
}

export default Money
