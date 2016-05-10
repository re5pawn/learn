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

But there are exclusions and those rules too breakable...
To be continued.
