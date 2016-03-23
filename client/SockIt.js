var ClientID;
Meteor.subscribe('sockets');
console.log(Sockets.find().fetch());

Meteor.call("requestID", [],function(err, res){
  ClientID = res;
  Cookie.set("ClientID",ClientID);
  console.log(res);
});

Template.hello.helpers({
  id: function () {
    return ClientID;
  }
});
