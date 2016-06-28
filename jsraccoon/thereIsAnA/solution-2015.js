function thereIsAnA(obj) {
  const isObject = function(test) {
    return Object.prototype.toString.call(test).includes('Object');
  };
  
  return Object.keys(obj).reduce((result, key) => {
    if (key === 'a') {
      result++;
    }
    
    if (isObject(obj[key])) {
      result += thereIsAnA(obj[key]);
    }
    
    return result;
  }, 0);
}
