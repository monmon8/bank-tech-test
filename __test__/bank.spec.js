
import Bank from "../src/bank"
import mockConsole from "jest-mock-console"
import mockdate from "mockdate"

describe("Test Feature", () => {
  let bank;

  beforeEach(function () {
    bank = new Bank();
  });

  it('start the balance at 0 ', () => {
    expect(bank.currentDeposit()).toEqual(0);
  });

  it('deposits money', () => {
    bank.deposit(300)
    expect(bank.balance).toEqual(300)
  });

  it('withdrawals money', () => {
    bank.deposit(300)
    bank.withdrawal(100)
    expect(bank.balance).toEqual(200)
  });

  it('adds transactions to the statement', () => {
    mockdate.set('1/30/2000')
    let d = new Date()
    bank.addToStatement(100, 0, 100)
    expect(bank.statement).toEqual([
      {
        date: d,
        credit: 100,
        debit: 0,
        balance: 100
      }
    ])

    mockdate.reset();
  });

  it('prints the statement', () => {
    let d = new Date
    const restoreConsole = mockConsole();
    bank.deposit(300)
    bank.withdrawal(100)
    bank.printStatement()
    expect(console.log).toHaveBeenCalledWith((`date || credit || debit || balance \n${d} || 300 || 0 || 300\n${d} || 0 || 100 || 200`));
    restoreConsole();
  });

});