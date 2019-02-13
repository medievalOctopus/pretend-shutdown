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

var play_alarms = function(){
	var media = document.getElementById("alarms");
	const playPromise = media.play();
	if (playPromise !== null){
		playPromise.catch(() => { media.play(); })
	}
};

var update_timer = function(secs) {
	var time = secs_to_str(secs);
	document.getElementById("timer").innerText = time;
	if (secs == 25) {
		play_alarms();
		txt = document.getElementById("message").innerHTML;
		document.getElementById("message").innerHTML = "<marquee truespeed scrolldelay=30>" + txt + "</marquee>";
	} else if (secs == 20) {
		setInterval(exclaim, 450);
	} else if (secs == 15) {
		document.getElementById("timer").classList.add("spinner");
	} else if (secs == 10) {
		setInterval(flash_timer, 300);
	} else if (secs == 5) {
		setInterval(flash_logo, 100);
	}
};

var rick_roll = function() {
	document.location = "https://www.youtube.com/watch?v=oHg5SJYRHA0";
};

var red_background = function() {
	document.body.style.backgroundColor = "red";
	document.getElementById("message").style.color = "white";
	setTimeout(white_background, 200);
};

var white_background = function() {
	document.body.style.backgroundColor = "white";
	document.getElementById("message").style.color = "black";
	setTimeout(red_background, 200);
};

var flash_timer = function() {
	document.getElementById("timer").classList.toggle("timer2");
};

var flash_logo = function() {
	document.getElementById("logo").classList.toggle("logo2");
};

var exclaim = function() {
	document.getElementById("exclaim").innerText += "!";
};

var ready = function() {
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
};

window.onload = ready;
