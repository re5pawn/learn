function sum() {
  'use strict';
  
  var args = Array.prototype.slice.call(arguments, 0);

  return args.reduce(function(total, elem) {
    return total + elem;
  });

  // or for older browsers
  // var result = typeof args[0] === 'number' ? 0 : '';
  // var length = args.length;
  // var i;

  // for (i = 0; i < length; i++) {
  //  result += args[i];
  // }

  // return result;
}
