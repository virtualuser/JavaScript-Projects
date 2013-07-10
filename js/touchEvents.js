/* wrap everything in an anonymous function to contain the variables */


//JSON object 
var contacts = {
	"addressBook" : [
	{
		"name": "hillisha",
		"email": "hill@example.com"
	},
	{
		"name": "hilloma",
		"email": "hill@example.com"
	},
	{
		"name": "paul",
		"email": "cleveland@example.com"
	},
	{
		"name": "vishaal",
		"email": "vish@example.com"
	},
	{
		"name": "mike",
		"email": "grady@example.com"
	},
	{
		"name": "jamie",
		"email": "dusted@example.com"
	}
	]
};

var target = document.getElementById("output");
var book = contacts.addressBook;
var length = book.length;
var autoComplete = document.getElementById("autocomplete");

/*adr to hold methods*/
var adr = {
	getAllContacts: function() {

		/*Clear contents of #output*/
		target.innerHTML = "";

		if (length > 0) {

			for (var i = 0; i < length; ++i) {
				var obj = book[i];

				target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'
				+ obj.email + '</a></p>'; 
			}
		}
		else
			target.innerHTML = '<p>No data available.</p>';
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

		//reference neccesarry objects
		var searchValue = document.getElementById("query").value;

		//reset target
		target.innerHTML = "";

		if (length > 0 && searchValue != "") {

			for (var i = 0; i < length; ++i) {

				var obj = book[i];

				if (obj.name.indexOf(searchValue) != -1) 
					target.innerHTML += '<p>' + obj.name.bold() + ', <a href="mailto:' +
					obj.email + '">' + obj.email + '</a></p>';
			}
		}
	},

	autocompl: function() {
		//reference neccesarry objects
		var searchValue = document.getElementById("query").value;

		if (length > 0 && searchValue != "") {

			for (var i = 0; i < length; ++i) {

				var obj = book[i];

				if (obj.name.indexOf(searchValue) != -1) 
					autoComplete.setAttribute("placeholder", obj.name);
			}
		}
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

//add/remove hovering effect, add search of JSON object, add autocomplete 
var searchForm = document.getElementById("search-form");
searchForm.addEventListener("mouseover", adr.addHoverClass, false);
searchForm.addEventListener("mouseout", adr.removeHoverClass, false);
searchForm.addEventListener("submit", adr.search, false);






