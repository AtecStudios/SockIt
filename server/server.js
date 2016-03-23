Connections = [];

Meteor.publish('sockets', function () {
    return Sockets.find()
});

Meteor.methods({
  requestID: function () {
    var ID = Random.id();
    console.log("[Methods] Client Requested ID. Giving: " + ID);
    return ID;
  },
  newSocket: function(data){
    var newSocket = {
      owner: data.owner,
      user: data.user,
      name: data.name,
      port: data.port,
      type: data.type,
      duration: 30,
      timeLeft: 25,
      status: "Creating..."
    };
    var id = Sockets.insert(newSocket);
    console.log('[Managers] Creating New Socket ['+id+'] on port: ' + data.port);
  },
  deleteSocket: function(id){
    console.log('[Managers] Removing Soceket:'+id);
    Sockets.remove(id);
  }
});
