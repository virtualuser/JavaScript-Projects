function getHTTPObject() {

	var xhr;

	if (window.XMLHttpRequest)
		xhr = new XMLHttpRequest();
	else if (window.ActiveXOject) 
		xhr = new ActiveXOject("Msxml2.XMLHTTP");

	return xhr;
}

function ajaxCall(dataURL, callback) {
	//get correct Ajax object
	var request = getHTTPObject();

	request.onreadystatechange = function() {
		//check if Ajax call was successful
		if (request.readyState === 4 && request.status === 200) {	 
			var contacts = JSON.parse(request.responseText);

		if (typeof callback == "function")
			callback(contacts);
		}

	}

	request.open("GET", dataURL, true);
	request.send(null);
}

function test () {
	console.log("test");
}

window.setInterval(function() {
	ajaxCall("data/contacts.json",
	function(data){
		console.log("***********");
		console.log(data);
})}, 2000);//console.log(data); 