var secs_to_str = function(secs) {
	// secs is an integer
	// return mins + secs
	// eg 65 -> 1:05
	var mins = Math.floor(secs / 60);
	var remainder = secs % 60;
	var before = "" + mins;
	var after = "" + remainder;
	if (remainder < 10) {
		after = "0" + after;
	}
	return before + ":" + after;
};

var update_timer = function(secs) {
	var time = secs_to_str(secs);
	document.getElementById("timer").innerText = time;
	if (secs > 3) {
		// beep sound
		document.getElementById("beep").play();
	} else {
		// high pitched beep sound
		document.getElementById("highbeep").play();
	}
}

var rick_roll = function() {
	document.location = "https://www.youtube.com/watch?v=oHg5SJYRHA0";
}

var red_background = function() {
	document.body.style.backgroundColor = "red";
	setTimeout(white_background, 200);
}

var white_background = function() {
	document.body.style.backgroundColor = "white";
	setTimeout(red_background, 200);
}

var on_load = function() {
	var t = 30;
	update_timer(t);
	for(var i = 0; i < t - 3; i++){
		setTimeout(update_timer, 1000 * i, t - i);
	}
	setTimeout(red_background, (t - 3) * 1000);
	for(var i = 3; i >= 0; i--){
		setTimeout(update_timer, 1000 * (t - i), i);
	}
	setTimeout(rick_roll, t * 1000);
}

window.addEventListener('load', on_load, false);
