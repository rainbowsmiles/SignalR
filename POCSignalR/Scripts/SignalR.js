$.connection.hub.start()
    .done(function() {
        console.log('it worked');
        $.connection.myHub.server.announce("tada");
    })
    .fail(function () { alert('failed'); });

$.connection.myHub.client.announce = function(message) {

    $("#welcome-messages").append(message + "<br/>");
}
