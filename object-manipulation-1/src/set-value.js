/* exported setValue */
/* -create a function setValue with 3 arguments object, key, and value
-the variable value is assigned to the object object at string index of key.
-use the keys method of the Object property with argument object to set the
value and key within the object
-return the object */
function setValue(object, key, value) {

  object[key] = value;
  Object.keys(object);
  return object;
}
