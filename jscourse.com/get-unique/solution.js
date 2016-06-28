function getUnique(list) {
  'use strict';

  return Array.prototype.reduce.call(list, function(result, current) {
    if (result.indexOf(current) < 0) {
      result.push(current);
    }

    return result;
  }, []);
}
