# How "this" works in JavaScript

Normally "this" in JavaScript ES5 can refer to:

##### 1. Global object (`window` in browser, `global` in Node.js)

```js
  function contextA() {
    console.log(this === window); // (*)
    // Node.js
    // console.log(this === global); // (*)
  }
  contextA();
  // (*) true
```

##### 2. Object whose method is called

```js
  var contextB = {
    prop: {x: 16, y: 128},

    methodA: function() {
      console.log(this === contextB); // (*)
      this.methodB();
    },

    methodB: function() {
      console.log(this.prop); // (**)
    }
  }
  contextB.methodA();
  // (*) true
  // (**) {x: 16, y: 128}
```

##### 3. New instance from constructor function

```js
  var Point = function(x, y) {
    this.x = x;
    this.y = y;

    this.getPosition = function() {
      return {x: this.x, y: this.y}; // (*)
    };
  };
  var contextC = new Point(64, 16); // this === contextC
  contextC.getPosition();
  // (*) {x: 64, y: 16}
```

But there are exclusions and those rules too breakable.

### Exclusions & issues

* In __strict mode__ `this` doesn't refer to global object

```js
  'use strict';

  function contextA() {
    console.log(this === window); // (*)
    console.log(this === undefined); // (**)

    // Node.js
    // console.log(this === global); // (*)
    // console.log(this === undefined); // (**)
  }
  contextA();
  // (*) false
  // (**) true
```

* Implicit change of context

```js
  var contextB = {
    methodA: function() {
      console.log(this === contextB); // (*)
      this.methodB(); // (**)
    },

    methodB: function() {
      console.log('methodB called');
    }
  }
  var someFn = contextB.methodA;
  someFn();
  // (*) false
  // (**) TypeError: this.methodB is not a function
```

It will be because `methodA` called with a changed context,
`this` will refer to global object (`window`/`global`) or `undefined` in a __strict mode__.

```js
  'use strict';

  var contextB = {
    methodA: function() {
      this.methodB(); // (*)
    },

    methodB: function() {
      console.log('methodB called');
    }
  }
  var someFn = contextB.methodA;
  someFn();
  // (*) Cannot read property 'methodB' of undefined
```

How to solve this problem:

```js
  someFn.call(contextB); // all right!
```
or:
```js
  someFn.bind(contextB);
  someFn(); // all right again!
```
[Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
[Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

* Call constructor without "new"

```js
  var Point = function(x, y) {
    this.x = x;
    this.y = y;

    this.getPosition = function() {
      return {x: this.x, y: this.y}; // (*)
    };
  };
  var contextC = Point(64, 16); // this === global object
  contextC.getPosition();
  // (*) Cannot read property 'getPosition' of undefined
```

Now, in global object assigned two properties (`x`, `y`) and a method (`getPosition`).
It's very pity.

How to solve this problem:

```js
  var Point = function(x, y) {
    if (!(this instanceof Point)) {
      // "this" doesn't refer to new instance,
      // call its correctly
      return new Point(x, y);
    }

    // ...
  };
```

* Incorrect "this" inside callback function

```js
  var Model = function(entityName) {
    this.data = [];

    this.getEntity = function(id) {
      // there is ajax call...

      setTimeout(function() {
        this.data = [
          {id: 123, prop: 'foo'},
          {id: 456, prop: 'bar'},
          {id: 789, prop: 'baz'}
        ];
      }, 500);
    };
  }

var users = new Model('users');
users.getEntity();
console.log(users.data); // []
```

So, in global object assigned an extra property `data`. It's very pity again.

How to solve this problem:

```js
  var Model = function(entityName) {
    var self = this;
    this.data = [];
    
    this.getEntity = function(id) {
      // there is ajax call...

      setTimeout(function() {
        self.data = [
          {id: 123, prop: 'foo'},
          {id: 456, prop: 'bar'},
          {id: 789, prop: 'baz'}
        ];
      }, 500);
    };
  }
```

Just save correct context for use into callback.

Or use `.bind(this)`:
```js
  this.getEntity = function(id) {
      // there is ajax call...

      setTimeout(function() {
        this.data = [
          {id: 123, prop: 'foo'},
          {id: 456, prop: 'bar'},
          {id: 789, prop: 'baz'}
        ];
      }.bind(this), 500);
    };
```

Those considered examples are most common and useful.
