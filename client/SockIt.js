var ClientID;

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
