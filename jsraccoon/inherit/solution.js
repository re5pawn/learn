function inherit(child, parent) {
  'use strict';

  Object.keys(parent.prototype).forEach(function(key) {
    if (typeof parent.prototype[key] !== 'function') { return; }
    child.prototype[key] = parent.prototype[key];
  });
}
