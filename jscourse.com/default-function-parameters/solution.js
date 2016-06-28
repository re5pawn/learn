function someFunc(options) {
  'use strict';
  
  var defaultOptions = {
    index: 0,
    animate: false
  };
  var isObject = Object.prototype.toString.call(options).indexOf('Object') >= 0;

  if (options && isObject) {
    var key;
    for (key in options) {
      if (!options.hasOwnProperty(key)) {
        break;
      }

      defaultOptions[key] = options[key];
    }
  }

  return defaultOptions;
}
