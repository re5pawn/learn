// An implementation of Promise A+ using JavaScript
// In progress...

function MyPromise(fnAsync) {
	var resolvers = [];
	var rejecters = [];
	var data;
	var error;

	var resolved = function(d) {
		data = d;

		var reducedResult = resolvers.reduce(function(result, resolve) {
			return resolve(result);
		}, data);

		resolvers.length = 0;

		return reducedResult;
	};

	var rejected = function(err) {
		console.error('rejected', err);

		error = err;
		// will be later...
	};

	fnAsync(resolved, rejected);

	this.then = function(fn) {
		if (resolvers.indexOf(fn) < 0) {
			resolvers.push(fn);
		}
		console.log('resolvers list:', resolvers);

		if (data) {
			setTimeout(() => resolved(data), 0);
		}

		return this;
	}
}

// usage example
var p = new MyPromise((success, fail) => {
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	setTimeout(() => {
		if (Math.random() < 0.5) {
			success(arr);
		} else {
			fail(new Error('fail from MyPromise'));
		}
	}, 3000);
});

var log = (d) => console.log('log:', d);
var firstFilter = (arr) => arr.filter(el => el >= 5);
var secondFilter = (arr) => arr.filter(el => el >= 7);

p.then(firstFilter).then(secondFilter).then(log); // after 3 sec -> [7, 8, 9, 10]
