function curry(fn) {
  var slice = Array.prototype.slice;
  var oldArgs = slice.call(arguments, 1);
  
  return function() {
    var newArgs = slice.call(arguments);
    var args = oldArgs.concat(newArgs);
    return fn.apply(null, args);
  }
}

// Usage
function sum(a, b, c) {
  return a + b + c;
}

var newSum = curry(sum, 1, 2);
newSum(3); // 6