function execFunctions(arrOfFunctions) {
  return arrOfFunctions.map(function(fn) {
    return fn();
  });
}
