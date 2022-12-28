/* exported defaults */
/* -create a function that takes 2 arguments
-create a for in loop  that loops over the keys in source.
-create an if statement checking if those any of the keys of source are
NOT in target.
-if any of the keys in target does not exist, that source at key is added
to the target object at key.
} */

function defaults(target, source) {
  for (var key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}
