function adorn(value) {
	return value = (value < 10) ? ("0" + value) : value;
}

function watch() {
	// set the default variables
	var today 		= new Date(),
		hours 		= today.getHours(),
		minutes 	= today.getMinutes(),
		seconds 	= today.getSeconds(),
		meridian	= (hours >= 12) ? "PM" : "AM",
		time		= "";

	// the hour '0' should be '12'
	hours = hours % 12;
	hours = hours ? hours : 12;

	// add zero (0)
	minutes = adorn(minutes);
	seconds = adorn(seconds);

	// make the time string
	time = hours + " : " + minutes + " : " + seconds + " " + meridian;

	// get and set time into the element
	var clocks = document.querySelectorAll('#clock');
	[].forEach.call(clocks, function(clock) {
		clock.innerHTML = time;
	});

	// console.log(time);

	// set the timer
	var timer = setTimeout(watch, 1000);
}
