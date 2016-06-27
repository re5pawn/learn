function _curry(mode) {
  // mode = 'left' || 'right'

  return function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    
    return function(newArg) {
      if (arguments.length > 1) {
        throw new Error('Function is expecting only one parameter');
      }

      var newArgs = mode === 'right'
        ? [newArg].concat(args)
        : args.concat([newArg]);

      return fn.apply(null, newArgs);
    }
  }
}

var curry = _curry('left');
var curryRight = _curry('right');

// Usage
function setBgColor(node, color) {
  console.log(arguments);
  node.style.backgroundColor = color;
}

// Example 01: set the same background color for different elements
var setGreenBg = curryRight(setBgColor, 'lightgreen');

var someElement = document.querySelector('.some-element');
var anotherElement = document.querySelector('.another-element');
var elementN = document.querySelector('.elementN');

setGreenBg(someElement);
// someElement will have lightgreen background color

setGreenBg(anotherElement);
// anotherElement will have lightgreen background color

setGreenBg(elementN);
// element2 will have lightgreen background color

// Example 02: set a different background color for the same element
var someButton = document.querySelector('.some-button');
var setButtonBgColor = curry(setBgColor, someButton);

setButtonBgColor('lightblue');
// someButton will have lightblue background color

setButtonBgColor('lightgreen');
// someButton will have lightgreen background color

setButtonBgColor('red');
// someButton will have red background color
