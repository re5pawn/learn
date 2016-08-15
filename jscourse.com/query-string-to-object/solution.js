function queryStringToObject(queryString) {
  'use strict';
  
  queryString = decodeURIComponent(queryString.trim());

  if (!queryString.length) {
    return {};
  }

  if (queryString.indexOf('?') >= 0) {
    queryString = queryString.substring(queryString.indexOf('?') + 1);
  }

  var assign = function(targetObject, queryStringPart) {
    var eqCharIdx = queryStringPart.indexOf('=');
    var key = queryStringPart.slice(0, eqCharIdx);
    var value = queryStringPart.slice(eqCharIdx + 1);

    if (value === 'true') {
      value = true;
    }

    if (value === 'false') {
      value = false;
    }

    if (!isNaN(parseInt(value, 10))) {
      value = parseInt(value, 10);
    }

    targetObject[key] = value;
    
    return targetObject;
  };
  
  var queryStringParts = queryString.split('&');

  return queryStringParts.reduce(assign, {});

  // or for older browsers
  // var result = {};
  // var length = queryStringParts.length;
  // var i;
  
  // for (i = 0; i < length; i++) {
  //  assign(result, queryStringParts[i]);
  // }

  // return result;
}
