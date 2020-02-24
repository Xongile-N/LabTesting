'use strict'
const account = {
  balance: 0,
  depositCount: 0,
  depositTotal: 0,
  withdrawalCount: 0,
  withdrawalTotal: 0,
  deposit: function (amount) {
    this.balance += amount
    this.depositTotal += amount
    this.depositCount++
    return `You have deposited R${amount}. Your balance is R${this.balance}`
  },
  withdraw: function (amount) {
    if (this.balance < amount) return 'Insufficient funds'
    this.balance -= amount
    this.withdrawalTotal += amount
    this.withdrawalCount++
    return `You have withdrawn R${amount}. Your balance is R${this.balance}`
  },
  summary: function () {
    return `The account balance is R${this.balance}. There have been ${this.depositCount} deposits totalling R${this.depositTotal} and ${this.withdrawalCount} withdrawals totalling R${this.withdrawalTotal} `
  }

}
console.log(account.summary())
console.log(account.withdraw(10))
console.log(account.deposit(100))
console.log(account.deposit(50))
console.log(account.withdraw(40))

console.log(account.withdraw(40))

console.log(account.withdraw(20))

console.log(account.summary())
