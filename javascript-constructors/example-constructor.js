function ExampleConstructor() {
}
console.log('value of prototype property of ExampleConstructor:', ExampleConstructor instanceof Function);
console.log('typeof prototype property of ExampleConstructor:', typeof ExampleConstructor);
var newExampleConstructor = new ExampleConstructor();
console.log('value of newVar:', newExampleConstructor);
var instanceOfNewExampleConstructor = newExampleConstructor instanceof ExampleConstructor;
console.log('value of instanceOfNewExampleConstructor:', instanceOfNewExampleConstructor);
