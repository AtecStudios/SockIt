Template.SocketNew.events({
    "submit .new-socket": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var Socket=  {
        owner: Session.get("ClientID"),
        user: false,
        name: event.target.name.value,
        port: event.target.port.value,
        type: event.target.socketType.value,
      }
      Meteor.call("newSocket", Socket);
      // Clear form
      event.target.name.value = "";
    }
  });
