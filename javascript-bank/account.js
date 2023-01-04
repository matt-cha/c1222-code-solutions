/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) === true && amount > 0) {
    var depositAmount = new Transaction('deposit', amount);
    this.transactions.push(depositAmount);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) === true && amount > 0) {
    var withdrawAmount = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawAmount);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {

  var depositSum = 0;
  var withdrawalSum = 0;
  var funds = 0;
  if (this.transactions.length === 0) {
    return funds;
  } else {
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        depositSum += this.transactions[i].amount;
      }
      if (this.transactions[i].type === 'withdrawal') {
        withdrawalSum += this.transactions[i].amount;
      }

    }
    funds = depositSum - withdrawalSum;
    return funds;
  }

};
