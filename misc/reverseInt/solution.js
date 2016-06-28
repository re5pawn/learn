function reverseInt(n) {
  'use strict';
  
  if (isNaN(n) || typeof n !== 'number') {
    throw new Error('Parameter must be a number');
  }

  var rn = parseInt(n.toString().split('').reverse().join(''), 10);
  return n < 0 ? -rn : rn;
}