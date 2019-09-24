
function Bank() {
  this.balance = 0;
  this.statement = [];
}

Bank.prototype.currentDeposit = function () {
  return this.balance;
};

Bank.prototype.deposit = function (amount) {
  this.balance += amount;
};

Bank.prototype.withdrawal = function (amount) {
  this.balance -= amount;
};


export default Bank;