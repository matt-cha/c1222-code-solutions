/* global Account, Transaction, expect */

describe('Account', function () {

  beforeEach(function () {
    expect(Account).to.be.a('function');
  });

  it('has a deposit() prototype method', function () {
    expect(Account).to.respondTo('deposit');
  });

  it('has a withdraw() prototype method', function () {
    expect(Account).to.respondTo('withdraw');
  });

  it('has a getBalance() prototype method', function () {
    expect(Account).to.respondTo('getBalance');
  });

  describe('new Account(number, holder)', function () {

    it('returns an Account object', function () {
      var savings = new Account(92, 'Grimdiana Bones');
      expect(savings)
        .to.be.an('object')
        .and.be.an.instanceof(Account);
    });

    it('has a number property that matches the number argument', function () {
      var checking = new Account(42, 'Jeff Jefferson');
      expect(checking)
        .to.have.property('number')
        .that.equals(42);

      var mattressCash = new Account(67, 'Jeff Jefferson');
      expect(mattressCash)
        .to.have.property('number')
        .that.equals(67);
    });

    it('has a holder property that matches the holder argument', function () {
      var savings = new Account(5, 'Speed Racer');
      expect(savings)
        .to.have.property('holder')
        .that.equals('Speed Racer');

      var debit = new Account(5, 'Slow Anne Steady');
      expect(debit)
        .to.have.property('holder')
        .that.equals('Slow Anne Steady');
    });

    it('has a transactions property initialized to an empty array', function () {
      var lockbox = new Account(5, 'Speed Racer');
      expect(lockbox)
        .to.have.property('transactions')
        .that.is.an('array')
        .with.lengthOf(0);
    });

  });

  describe('account.deposit(amount)', function () {

    context('when amount is not a positive integer', function () {

      it('returns false', function () {
        var account = new Account(1, 'Richy Rich');
        expect(account.deposit(-1000)).to.equal(false);
        expect(account.deposit('fake money')).to.equal(false);
        expect(account.deposit(NaN)).to.equal(false);
        expect(account.deposit(0)).to.equal(false);
        expect(account.deposit(3.7)).to.equal(false);
      });

      it('does not store a transaction', function () {
        var account = new Account(1, 'Richy Rich');
        account.deposit(-50);
        account.deposit('fake money');
        account.deposit(NaN);
        account.deposit(0);
        account.deposit(3.7);
        expect(account)
          .to.have.property('transactions')
          .that.is.an('array')
          .with.lengthOf(0);
      });

    });

    context('when amount is a positive integer', function () {

      it('returns true', function () {
        var account = new Account(1, 'Richy Rich');
        expect(account.deposit(1000)).to.equal(true);
        expect(account.deposit(5)).to.equal(true);
        expect(account.deposit(42)).to.equal(true);
      });

      it('stores a deposit transaction with the right amount', function () {
        var account = new Account(1, 'Richy Rich');

        account.deposit(1000);
        account.deposit(5);

        expect(account)
          .to.have.property('transactions')
          .that.is.an('array')
          .with.lengthOf(2);

        var transaction1 = account.transactions[0];
        expect(transaction1).to.be.an.instanceof(Transaction);
        expect(transaction1).to.have.property('type', 'deposit');
        expect(transaction1).to.have.property('amount', 1000);

        var transaction2 = account.transactions[1];
        expect(transaction2).to.be.an.instanceof(Transaction);
        expect(transaction2).to.have.property('type', 'deposit');
        expect(transaction2).to.have.property('amount', 5);
      });

    });

  });

  describe('account.withdraw(amount)', function () {

    context('when amount is not a positive integer', function () {

      it('returns false', function () {
        var account = new Account(2, 'Poor Richard');
        expect(account.withdraw(-1000)).to.equal(false);
        expect(account.withdraw('fake money')).to.equal(false);
        expect(account.withdraw(NaN)).to.equal(false);
        expect(account.withdraw(0)).to.equal(false);
        expect(account.withdraw(3.7)).to.equal(false);
      });

      it('does not store a transaction', function () {
        var account = new Account(2, 'Poor Richard');
        account.withdraw(-50);
        account.withdraw('fake money');
        account.withdraw(NaN);
        account.withdraw(0);
        account.withdraw(3.7);
        expect(account)
          .to.have.property('transactions')
          .that.is.an('array')
          .with.lengthOf(0);
      });

    });

    context('when amount is a positive integer', function () {

      it('returns true', function () {
        var account = new Account(2, 'Poor Richard');
        expect(account.withdraw(1000)).to.equal(true);
        expect(account.withdraw(5)).to.equal(true);
        expect(account.withdraw(42)).to.equal(true);
      });

      it('stores a withdrawal transaction with the right amount', function () {
        var account = new Account(2, 'Poor Richard');

        account.withdraw(1000);
        account.withdraw(5);

        expect(account)
          .to.have.property('transactions')
          .that.is.an('array')
          .with.lengthOf(2);

        var transaction1 = account.transactions[0];
        expect(transaction1).to.be.an.instanceof(Transaction);
        expect(transaction1).to.have.property('type', 'withdrawal');
        expect(transaction1).to.have.property('amount', 1000);

        var transaction2 = account.transactions[1];
        expect(transaction2).to.be.an.instanceof(Transaction);
        expect(transaction2).to.have.property('type', 'withdrawal');
        expect(transaction2).to.have.property('amount', 5);
      });

    });

  });

  describe('account.getBalance()', function () {

    context('when the account has no transaction history', function () {

      it('returns 0', function () {
        var account = new Account(42, 'Jeff Jefferson');
        var balance = account.getBalance();
        expect(balance).to.equal(0);
        expect(account.transactions).to.have.lengthOf(0);
      });

    });

    context('when the account has a transaction history', function () {

      it('returns the balance of those transactions', function () {
        var account = new Account(42, 'Jeff Jefferson');
        account.deposit(100);
        account.withdraw(23);
        expect(account.getBalance()).to.equal(77);
        account.withdraw(5);
        account.deposit(88);
        expect(account.getBalance()).to.equal(160);
        account.withdraw(90);
        account.withdraw(120);
        expect(account.getBalance()).to.equal(-50);
        account.deposit(50);
        expect(account.getBalance()).to.equal(0);
      });

    });

  });

});
