function execFunctions(arrOfFunctions) {
  'use strict';

  return arrOfFunctions.map(function(fn) {
    return fn();
  });

  // or for older browsers
  // var result = [];
  // var length = arrOfFunctions.length;
  // var i;

  // for (i = 0; i < length; i++) {
  //  result.push(arrOfFunctions[i]());
  // }

  // return result;
}
