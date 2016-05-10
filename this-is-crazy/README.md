# How "this" works in JavaScript

Normally "this" in JavaScript ES5 can refer to:

##### 1. Global object (`window` in browser, `global` in Node.js)

```js
	function contextA() {
		console.log(this === window); // true
		// Node.js
		// console.log(this === global); // true
	}
	contextA();
```

##### 2. Object whose method is called

```js
	var contextB = {
		prop: {x: 16, y: 128},

		methodA: function() {
			console.log(this === contextB); // true
			this.methodB();
		},

		methodB: function() {
			console.log(this.prop); // {x: 16, y: 128}
		}
	}
	contextB.methodA();
```

##### 3. New instance from constructor function

```js
	var Point = function(x, y) {
		this.x = x;
		this.y = y;

		this.getPosition = function() {
			return {x: this.x, y: this.y};
		};
	};
	var contextC = new Point(64, 16); // this === contextC
	contextC.getPosition(); // {x: 64, y: 16}
```

But there are exclusions and those rules too breakable.

### Exclusions & issues

* In __strict mode__ `this` doesn't refer to global object

```js
	'use strict';

	function contextA() {
		console.log(this === window); // false
		console.log(this === undefined); // true

		// Node.js
		// console.log(this === global); // false
		// console.log(this === undefined); // true
	}
	contextA();
```

* Implicit change of context

```js
	var contextB = {
		methodA: function() {
			console.log(this === contextB); // false
			this.methodB(); // TypeError: this.methodB is not a function
		},

		methodB: function() {
			console.log('methodB called');
		}
	}
	var someFn = contextB.methodA;
	someFn();
```

It will be because `methodA` called with a changed context,
`this` will refer to global object (`window`/`global`) or `undefined` in a __strict mode__.

```js
	'use strict';

	var contextB = {
		methodA: function() {
			console.log(this === contextB); // false
			this.methodB(); // Cannot read property 'methodB' of undefined
		},

		methodB: function() {
			console.log('methodB called');
		}
	}
	var someFn = contextB.methodA;
	someFn();
```

How solve this problem:

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

To be continued...
