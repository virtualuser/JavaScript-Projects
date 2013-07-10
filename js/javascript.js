∏//Create new Ajax object, depending on browser
function getHTTPObject() {

	var xhr;

	if (window.XMLHttpRequest)
		xhr = new XMLHttpRequest();
	else if (window.ActiveXOject) 
		xhr = new ActiveXOject("Msxml2.XMLHTTP");

	return xhr;
}

//create and send Ajax call
function ajaxCall(dataURL, outputElement, callback) {
	//get correct Ajax object
	var request = getHTTPObject();

	outputElement.innerHTML = "Loading...";

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



/* wrap everything in an anonymous function to contain the variables */
(function() {

//Define necessary variables holding DOM elements
var target = document.getElementById("output");
var autoComplete = document.getElementById("autocomplete");

/*adr to hold methods*/
var adr = {
	getAllContacts: function() {

		/*Clear contents of #output*/
	

		ajaxCall('data/contacts.json', target, function(data) { 

				//clear innerHTML of target element
				target.innerHTML = "";

				//reference neccesarry objects
				var searchValue = document.getElementById("query").value,
					addrBook = data.addressBook,
					count = addrBook.length;

			if (count > 0) {

				for (var i = 0; i < count; ++i) {
					var obj = addrBook[i];

					target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'
					+ obj.email + '</a></p>'; 
				}
			}
			else
				target.innerHTML = '<p>No data available.</p>';
		});
	},
	//highlight when active
	addActiveSection: function() {
		this.setAttribute("class", "active");
	},

	//remove when blur event
	removeActiveSection: function() {
		this.removeAttribute("class");
	},

	//add hovering effect, which is better be done with CSS
	addHoverClass: function() {
		this.setAttribute("class", "hovering");
	},

	//remove hovering effect
	removeHoverClass: function() {
		this.removeAttribute("class");
	},

	//find entered query in JSON object
	search: function(event) {
		//prevent default behavior
		event.preventDefault();

		ajaxCall('data/contacts.json', target, function(data) { 

			//reference neccesarry objects
			var searchValue = document.getElementById("query").value,
				addrBook = data.addressBook,
				count = addrBook.length;
			//reference neccesarry objects
			var searchValue = document.getElementById("query").value;

			//reset target
			target.innerHTML = "";

			if (count > 0 && searchValue != "") {

				for (var i = 0; i < count; ++i) {

					var obj = addrBook[i];

					if (obj.name.indexOf(searchValue) != -1) 
						target.innerHTML += '<p>' + obj.name.bold() + ', <a href="mailto:' +
						obj.email + '">' + obj.email + '</a></p>';
				}
			}
		})
	},
	autocompl: function(event) {


		ajaxCall('data/contacts.json', target, function(data) { 

			//reference neccesarry objects
			var searchValue = document.getElementById("query").value,
				addrBook = data.addressBook,
				count = addrBook.length;
			
			if (searchValue == "")
				autoComplete.removeAttribute("placeholder");

			else if (count > 0 && searchValue != "") {

				for (var i = 0; i < count; ++i) {

					var obj = addrBook[i];

					if (obj.name.indexOf(searchValue) != -1) 
						autoComplete.setAttribute("placeholder", obj.name);
				}
			}
		});
	}
}

var btn = document.getElementById("get-all");
/*attach event listener to button*/
btn.addEventListener("click", adr.getAllContacts, false);

/*add class="active" when focus;
remove class when blur event occurs.*/
var searchField = document.getElementById("query");
searchField.addEventListener("focus", adr.addActiveSection);
searchField.addEventListener("blur", adr.removeActiveSection);
searchField.addEventListener("keyup", adr.autocompl, false);
searchField.addEventListener("keyup", adr.search, false);

//add/remove hovering effect, add search of JSON object, add autocomplete 
var searchForm = document.getElementById("search-form");
searchForm.addEventListener("mouseover", adr.addHoverClass, false);
searchForm.addEventListener("mouseout", adr.removeHoverClass, false);
searchForm.addEventListener("submit", adr.search, false);

})();






