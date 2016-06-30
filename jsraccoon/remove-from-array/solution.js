function remove(array, indexes) {
  'use strict';
  
  var indexesAsArray = Array.prototype.slice.call(arguments);

  return array.filter(function(item, idx) {
    return indexesAsArray.indexOf(idx) < 0;
  });
}