function fixStruct(struct) {
  'use strict';
  
  // we don't need the first and the last element
  var i = 1;
  var length = struct.length - 1;

  var curr, next, prev;
  var defineVariables = function(idx) {
    curr = struct[idx];
    next = struct[idx + 1];
    prev = struct[idx - 1];
  }

  for (i; i < length; i++) {
    defineVariables(i);

    // find the incorrect value of sequence
    if (curr.value !== next.value - next.delta) {

      // we need only numbers
      if (isNaN(next.value) || isNaN(next.delta)) {
        // go to the next sequence item
        i++;
        defineVariables(i);
      }

      curr.value = next.value - next.delta;
      curr.delta = curr.value - prev.value;
    }
  }
}