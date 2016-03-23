var GoodToGo = true;

Template.SocketNew.events({
    "input #name": function(event){
      event.preventDefault();
      if($("#name").hasClass('invalid')){
        GoodToGo = false;
      }
      if($("#name").hasClass('valid')){
        GoodToGo = true;
      }
    },
    "submit .new-socket": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      var name = event.target.name.value;
      var port = event.target.port.value;
      var type = event.target.socketType.value;
      if(name == ""){
        GoodToGo = false;
        alert("Plese Enter A Name!");
        return;
      }
      if(type == ""){
          GoodToGo = false;
          alert("Plese Enter A Type!");
          return;
      }

      // Get value from form element
      if(true){
        var Socket=  {
          owner: Session.get("ClientID"),
          user: false,
          name: name,
          port: port,
          type: type,
        }
        Meteor.call("newSocket", Socket);
        // Clear form
        event.target.name.value = "";
      }
    }
  });
