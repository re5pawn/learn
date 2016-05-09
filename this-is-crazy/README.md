# How "this" works in JavaScript

Normally "this" in JavaScript ES5 can refer to:

* Global object (`window` in browser, `global` in Node.js)

<pre>
	function contextA() {
		console.log(this === window); // true
		// Node.js
		// console.log(this === global); // true
	}
	contextA();
</pre>

* Object whose method is called

<pre>
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
</pre>

* New instance from constructor function

<pre>
	var Point = function(x, y) {
		this.x = x;
		this.y = y;

		this.getPosition = function() {
			return {x: this.x, y: this.y};
		};
	};
	var contextC = new Point(64, 16); // this === contextC
	contextC.getPosition(); // {x: 64, y: 16}
</pre>

But there are exclusions and those rules too breakable...
To be continued.
