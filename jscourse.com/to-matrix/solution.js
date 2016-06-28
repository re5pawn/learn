function toMatrix (data, rowSize) {
  'use strict';

  return data.reduce(function(result, d, i) {
    if (i % rowSize === 0) {
      result.push(data.slice(i, i + rowSize));
    }
    return result;
  }, []);

  // or for older browsers
  // var result = [];
  // var length = data.length;
  // var i;

  // for(i = 0; i < length; i += rowSize) {
  //  result.push(data.slice(i, i + rowSize));
  // }

  // return result;
}