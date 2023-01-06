/* exported defaults */
/* -create a function that takes 2 arguments
-create a for in loop of source in target
-if source at key */
function defaults(target, source) {
  for (var i = 0; i < source.length; i++) {
    if (target[i] !== source[i]) {
      target[i] = source[i];
    }
  }
  return target;
}
