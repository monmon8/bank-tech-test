
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

});