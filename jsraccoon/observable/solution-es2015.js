const observable = (obj) => {
	let observers = {};

	const removeHandler = (eventName, idx) => {
		observers[eventName] && observers[eventName].splice(idx, 1);
	};

	const removeObserver = (eventName) => {
		observers[eventName] && delete observers[eventName];
	};

	const assignMethods = () => {
		Object.assign(obj, api);
	};

	const api = {
		on(eventName, fn, runOnce = false) {
			observers[eventName] = observers[eventName] || [];

			const alreadyExist = observers[eventName].some(o => {
				return o.fn === fn && o.runOnce === runOnce;
			});

			if (!alreadyExist) {
				observers[eventName].push({ fn, runOnce });
			}
		},

		one(eventName, fn) {
			this.on(eventName, fn, true);
		},

		fire(eventName, ...args) {
			observers[eventName] && observers[eventName].forEach((o, i) => {
				o.fn.apply(this, args);
				o.runOnce && this.unbind(eventName, o.fn);
			});
		},

		unbind(eventName, fn) {
			if (fn && observers[eventName]) {
				observers[eventName].forEach((o, i, fns) => {
					if (o.fn !== fn) { return; }

					if (fns.length === 1) {
						removeObserver(eventName);
					} else {
						removeHandler(eventName, i);
					}
				});
			} else {
				removeObserver(eventName);
			}
		},

		getObservers() {
			return observers;
		}
	};

	assignMethods();
};
