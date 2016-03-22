Connections = [];

Meteor.methods({
  requestID: function () {
    var ID = Random.id();
    console.log("[Methods] Client Requested ID. Giving: " + ID);
    return ID;
  }
});
