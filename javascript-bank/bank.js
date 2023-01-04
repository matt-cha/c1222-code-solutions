/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) === true && balance > 0) {
    var newAccountObject = new Account(this.nextAccountNumber, holder);
    newAccountObject.deposit(balance);
    this.accounts.push(newAccountObject);
    this.nextAccountNumber++;
    return newAccountObject.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number !== number) {
      return null;
    } else {
      var matchingAccountObject = this.accounts[i];
    }
  }
  return matchingAccountObject;
};

Bank.prototype.getTotalAssets = function () {

};
