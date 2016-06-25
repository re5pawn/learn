// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(fn, wait, immediate) {
  var timeout;

  return function() {
    var context = this;
    var args = arguments;
    var later = function() {
      timeout = null;
      !immediate && fn.apply(context, args);
    };
    var callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    callNow && fn.apply(context, args);
  };
}

// Usage
var myEfficientFn = debounce(function() {
  console.log('myEfficientFn called');
}, 250);
window.addEventListener('resize', myEfficientFn);
