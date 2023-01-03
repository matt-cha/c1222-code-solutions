/* exported whatIsThis, someObject */

function whatIsThis() {
  return this;
}

var someObject = {
  aProperty: 'hullo there',
  getThis: function () {
    return this;
  }
};
