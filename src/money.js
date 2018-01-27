// @flow

class Money {
  amount: number

  equals(object: ?Money): boolean {
    if (object !== null && object !== undefined) {
      const money: Money = (object: Money)
      return this.amount === money.amount
    }
    return false
  }
}

export default Money
