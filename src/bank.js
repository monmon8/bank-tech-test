
function Bank() {
  this.balance = 0;
  this.statement = [];
}

Bank.prototype.currentDeposit = function () {
  return this.balance;
};

Bank.prototype.deposit = function (amount) {
  this.balance += amount;
  this.addToStatement(amount, 0, this.balance)

};

Bank.prototype.withdrawal = function (amount) {
  this.balance -= amount;
  this.addToStatement(0, amount, this.balance)
};


Bank.prototype.addToStatement = function (credit, debit, balance) {
  const x = {
    date: new Date(),
    credit: credit,
    debit: debit,
    balance: balance
  }
  this.statement.push(x)
}

Bank.prototype.printStatement = function () {
  let a = "date || credit || debit || balance \n"

  this.statement.forEach(function (x, i) {
    a += `${x.date} || ${x.credit} || ${x.debit} || ${x.balance}\n`
  })
  console.log(a.substring(0, a.length - 1));

};

export default Bank;