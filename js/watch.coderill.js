function adorn(value) {
	return value = (value < 10) ? ("0" + value) : value;
}

function watch() {
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

	time = hours + " : " + minutes + " : " + seconds + " " + meridian;

	// get the element
	var clock = document.querySelector('#clock');
	clock.innerHTML = time;

	console.log(time);
	var timer = setTimeout(watch, 1000);
}
