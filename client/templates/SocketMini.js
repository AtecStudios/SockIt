Template.SocketMini.events({
  "click #delete": function (event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element

    Meteor.call("deleteSocket",this._id);
    // Clear form
  }
});
