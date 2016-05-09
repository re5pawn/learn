# How "this" works in JavaScript

Normally "this" in JavaScript ES5 can refer to:

1. Global object (window in browser, global in Node.js)

`function contextA() {
	console.log(this === window); // true
	// Node.js
	// console.log(this === global); // true
}`

2. Object whose method is called

`var contextB = {
	prop: {x: 16, y: 128},

	methodA: function() {
		console.log(this === contextB); // true
		this.methodB();
	},

	methodB: function() {
		console.log(this.prop); // {x: 16, y: 128}
	}
}`

3. New instance from constructor function

`var Point = function(x, y) {
	this.x = x;
	this.y = y;

	this.getPosition = function() {
		return {x: this.x, y: this.y};
	};
};
// this === contextC;
// contextC.getPosition(); // {x: 64, y: 16}
var contextC = new Point(64, 16);`

But there are exclusions and those rules too breakable...