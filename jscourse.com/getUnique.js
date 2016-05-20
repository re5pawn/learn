function getUnique(list) {
  list = Array.prototype.slice.call(list);
  
  return list.reduce(function(result, curr) {
    if (result.indexOf(curr) < 0) {
      result.push(curr);
    }

    return result;
  }, []);
}
