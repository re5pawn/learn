## NgEventEmitter

Wrapper for default AngularJS event system extended with `off` and `once` methods.

Usage:

```js
ngEventEmitter.$inject = ['$rootScope'];
function ngEventEmitter($rootScope) {
	return new NgEventEmitter($rootScope);
}

app.factory('ngEventEmitter', ngEventEmitter);

app.controller('firstCtrl', ['ngEventEmitter', '$scope', function(ngEventEmitter, $scope) {
	let cb = (event, data) => {
		// ...
		console.log('cb is called with data:', data);
	}

	ngEventEmitter.on('myEventName', cb);

	$scope.$on('$destroy', () => ngEventEmitter.off('myEventName', cb));
}]);

app.controller('secondCtrl', ['ngEventEmitter', function(ngEventEmitter) {
	ngEventEmitter.emit('myEventName', 'data for firstCtrl');
}]);
```