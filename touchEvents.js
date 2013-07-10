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
	} clickTest : function() {
		target.innerHTML + = "sasfsa";
	}
}

target.addEventListener("touchstart", touchMethods.touchDown, false);
target.addEventListener("touchend", touchMethods.touchUp, false);
target.addEventListener("touchmove", touchMethods.touchMove, false);
target.addEventListener("orientationchange", touchMethods.changeOrientation, false);
target.addEventListener("click", touchMethods.clickTest, false);