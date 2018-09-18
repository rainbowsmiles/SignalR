(function () {
	$("#click-me").on("click", function () {
		chat.server.getServerDateTime()
			.done(function (data) {
				writeToPage(data)
			})
			.fail(function (error) {
				writeToPage("Error getting the server dateTime: " + error);
			});
	});
	//var myHub = $.connection.myHub;//INFO: camelCase is a must. On .cs the class name is "MyHub", in js it needs to be "myHub"
	var chat = $.connection.ChatHub;// INFO: if HubName attributes are used, the name needs to be exactly the same. In this case "ChatHub". And it's mandatory to use the hubName now, the class name won't work anymore
	$.connection.hub.start()
		.done(function () {
			//console.log('it worked');
			writeToPage('It worked');
			chat.server.announceToEverybody("tada!!");
			
			//myHub.server.getServerDateTime2()
			//	.done()
			//	.fail(function (error) {
			//		writeToPage("Error getting the server dateTime: " + error);
			//	});
		})
		.fail(function () {
			//alert('failed');
			writeToPage("Error connecting to SignalR");
		});

	chat.client.announce = function (message) {
		writeToPage(message);
	}

	//myHub.client.displayDateTime = function (data) {
	//	writeToPage(data);
	//}

	var writeToPage = function (message) {
		$("#welcome-messages").append(message + "<br/>");
	}
})()


//INFO: (function(){})() - Immediately Invoked Function Expression - wrap all code inside of a function in order to take the variables out of the global scope