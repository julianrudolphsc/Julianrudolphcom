Template.add_post.events({
  'submit .add_post_form': function(event){
    event.preventDefault();
    var title = event.target.title.value;
    var body = event.target.body.value;
    Meteor.call('insertPost', title, body, function(error, result){
      if(error){
        FlashMessages.sendError("you fucked up!")
      }else{
        console.log(title)
      }
    });

    FlashMessages.sendSuccess("Post Added");
    Router.go("/admin/posts");
  }
});

Template.edit_post.events({
  'submit .edit_post_form': function(event){
    var title = event.target.title.value;
    var body = event.target.body.value;

    //update instead of insert
    Posts.update({
      _id: this._id
    }, {
      $set:{
        title: title,
        body: body
      }
    });


    FlashMessages.sendSuccess("Edit Made!");
    Router.go("/admin/posts");

    //no submit
    return false;
  }
});

Template.list_posts.events({
  'click .delete-post': function(){
    // var currentUser = this.user._id;

    Posts.remove(this._id);
    return false;
  }
  
});
