(function(){
var myHub = $.connection.myHub;
	$.connection.hub.start()
		.done(function () {
			//console.log('it worked');
			writeToPage('It worked');
			myHub.server.announce("tada!!");
		})
		.fail(function () {
			//alert('failed');
			writeToPage("Error connecting to SignalR");
		});

	myHub.client.announce = function (message) {
		writeToPage(message);
	}

	var writeToPage = function (message) {
		$("#welcome-messages").append(message + "<br/>");
	}
})()


//(function(){})() - Immediately Invoked Function Expression - wrap all code inside of a function in order to take the variables out of the global scope