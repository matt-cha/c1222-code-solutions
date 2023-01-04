/* global Account, Bank, expect */

describe('Bank', function () {

  beforeEach(function () {
    expect(Bank).to.be.a('function');
  });

  it('has an openAccount() prototype method', function () {
    expect(Bank).to.respondTo('openAccount');
  });

  it('has a getAccount() prototype method', function () {
    expect(Bank).to.respondTo('getAccount');
  });

  it('has a getTotalAssets() prototype method', function () {
    expect(Bank).to.respondTo('getTotalAssets');
  });

  describe('new Bank()', function () {

    it('returns a Bank object', function () {
      var bank = new Bank();
      expect(bank)
        .to.be.an('object')
        .and.be.an.instanceof(Bank);
    });

    it('has a nextAccountNumber property initialized to 1', function () {
      var bank = new Bank();
      expect(bank)
        .to.have.property('nextAccountNumber')
        .that.equals(1);
    });

    it('has an accounts property initialized to an empty array', function () {
      var bank = new Bank();
      expect(bank)
        .to.have.property('accounts')
        .that.is.an('array')
        .with.lengthOf(0);
    });

  });

  describe('bank.openAccount(holder, balance)', function () {

    context('when the opening balance is not a positive integer', function () {

      it('does not add a new account to the accounts list', function () {
        var bank = new Bank();
        bank.openAccount('Jeff Jefferson', 0);
        bank.openAccount('Jeff Jefferson', 'fish');
        bank.openAccount('Jeff Jefferson', false);
        bank.openAccount('Jeff Jefferson', undefined);
        bank.openAccount('Jeff Jefferson', -10);
        bank.openAccount('Jeff Jefferson', 3.7);
        expect(bank.accounts).to.have.lengthOf(0);
      });

      it('returns null', function () {
        var bank = new Bank();
        expect(bank.openAccount('Jeff Jefferson', 0)).to.equal(null);
        expect(bank.openAccount('Jeff Jefferson', 'fish')).to.equal(null);
        expect(bank.openAccount('Jeff Jefferson', false)).to.equal(null);
        expect(bank.openAccount('Jeff Jefferson', undefined)).to.equal(null);
        expect(bank.openAccount('Jeff Jefferson', -10)).to.equal(null);
        expect(bank.openAccount('Jeff Jefferson', 3.7)).to.equal(null);
      });

    });

    context('when the opening balance is a positive integer', function () {

      it('adds an account with the given balance to the accounts list', function () {
        var bank = new Bank();
        bank.openAccount('Jeff Jefferson', 1);
        bank.openAccount('Jeff Jefferson Jr', 10);
        bank.openAccount('Jeff Jefferson III', 1000);
        expect(bank.accounts).to.have.lengthOf(3);
        expect(bank.accounts[0].getBalance()).to.equal(1);
        expect(bank.accounts[1].getBalance()).to.equal(10);
        expect(bank.accounts[2].getBalance()).to.equal(1000);
      });

      it('increments the next account number', function () {
        var bank = new Bank();
        bank.openAccount('Jeff Jefferson', 1);
        expect(bank.nextAccountNumber).to.equal(2);
        bank.openAccount('Jeff Jefferson Jr', 10);
        expect(bank.nextAccountNumber).to.equal(3);
        bank.openAccount('Jeff Jefferson III', 1000);
        expect(bank.nextAccountNumber).to.equal(4);
      });

      it('returns the current account number', function () {
        var bank = new Bank();
        expect(bank.openAccount('Jeff Jefferson', 1)).to.equal(1);
        expect(bank.openAccount('Jeff Jefferson Jr', 10)).to.equal(2);
        expect(bank.openAccount('Jeff Jefferson III', 1000)).to.equal(3);
      });

    });

  });

  describe('bank.getAccount(number)', function () {

    context('when the bank does not have a matching account', function () {

      it('returns null', function () {
        var bank = new Bank();
        expect(bank.getAccount(39)).to.equal(null);
        var accountNumber = bank.openAccount('Jeff Jefferson', 10);
        expect(bank.getAccount(accountNumber + 1)).to.equal(null);
      });

    });

    context('when the bank has a matching account', function () {

      it('returns the account', function () {
        var bank = new Bank();
        var one = bank.openAccount('Jeff Jefferson', 10);
        var two = bank.openAccount('Jeff Jefferson Jr', 100);
        var three = bank.openAccount('Jeff Jefferson III', 1000);
        var third = bank.getAccount(three);
        var first = bank.getAccount(one);
        var second = bank.getAccount(two);
        expect(third)
          .to.be.an.instanceof(Account)
          .and.have.property('holder')
          .that.equals('Jeff Jefferson III');
        expect(third.getBalance()).to.equal(1000);
        expect(first)
          .to.be.an.instanceof(Account)
          .and.have.property('holder')
          .that.equals('Jeff Jefferson');
        expect(first.getBalance()).to.equal(10);
        expect(second)
          .to.be.an.instanceof(Account)
          .and.have.property('holder')
          .that.equals('Jeff Jefferson Jr');
        expect(second.getBalance()).to.equal(100);
      });

    });

  });

  describe('bank.getTotalAssets()', function () {

    context('when the bank has no accounts', function () {

      it('returns 0', function () {
        var bank = new Bank();
        expect(bank.getTotalAssets()).to.equal(0);
      });

    });

    context('when the bank has accounts', function () {

      it('returns the total of all account balances', function () {
        var bank = new Bank();
        var one = bank.openAccount('Jeff Jefferson', 10);
        var two = bank.openAccount('Jeff Jefferson Jr', 100);
        var three = bank.openAccount('Jeff Jefferson III', 1000);
        var first = bank.getAccount(one);
        var second = bank.getAccount(two);
        var third = bank.getAccount(three);
        expect(bank.getTotalAssets()).to.equal(1110);
        first.deposit(5);
        second.deposit(15);
        second.withdraw(32);
        third.deposit(30);
        expect(bank.getTotalAssets()).to.equal(1128);
      });

    });

  });

});
