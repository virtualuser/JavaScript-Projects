
var target = document.getElementsByTagName("body")[0];

var touchMethods = {
	touchDown : function() {
		//When screen is touched
		target.innerHTML += "Ouch! That hurts a lot, dude!<br>";
	}, 
	touchUp : function() {
		//When screen is released
		target.innerHTML += "Please, don't do that again!!<br>";
	}, 
	touchMove : function() {
		//When moved
		target.innerHTML += "I'm mooooving!<br>";
	}, 
	changeOrientation : function() {
		//When orientation is changed (portrait or landscape)
		target.innerHTML.innerHTML = "";
	}
}


function startup() {
var el = document.getElementsByTagName("body")[0];
el.addEventListener("touchstart", touchMethods.touchDown, false);
el.addEventListener("touchend", touchMethods.touchUp, false);
el.addEventListener("touchmove", touchMethods.touchMove, false);
el.addEventListener("orientationchange", touchMethods.changeOrientation, false);
}

