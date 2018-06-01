$(() => {
    const hub = $.connection.simpleHub;
    $.connection.hub.start().done(() => {
        hub.server.newUserConnected();
    });
    

    $(".btn-primary").on('click', function () {
        const message = $("#message").val();
        $("#message").val('');
        hub.server.newMessage(message);
        //$.post('/home/newmessage', {message}, () => {
        //    console.log('message sent!');
        //});
    });

    hub.client.newMessageReceived = message => {
        $("#messages").append(`<h3>${message}</h3>`);
    }

    hub.client.newUserConnected = id => {
        console.log(`new user connected, id: ${id}`);
    }

    $('.btn-success').on('click', function() {
        hub.server.personReceived({ name: 'Avrumi', age: 36 });
    });

    hub.client.newPerson = person => {
        console.log(person.Name + " " + person.Age);
    }
});