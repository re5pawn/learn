function formatTime(min) {
	'use strict';

	var hours = 0;
	var separator;

	while (min >= 60) {
		hours++;
		min -= 60;
	}

	separator = min < 10 ? ':0' : ':';

	return hours + separator + min;
}
