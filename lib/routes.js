Router.route('/', function () {
  this.render('AppMain');
});
Router.route('/socket/:id', function () {
  this.render('SocketView',{
    data:function(){
      return Sockets.findOne({_id:this.params.id})
    }
  });
});
