Template.add_post.events({
  'submit .add_post_form': function(event){
    var title = event.target.title.value;
    var body = event.target.body.value;

    //insert
    Posts.insert({
      title: title,
      body: body
    });
    FlashMessages.sendSuccess("Post Added");
    Router.go("/admin/posts");

    //no submit
    return false;
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
  'click .delete-post': function(event){
    if(confirm("Delete Post?")){
      Posts.remove(this._id);
      FlashMessages.sendSuccess("Post Deleted!")
      //no submit
      return false;
    }
  }
});
