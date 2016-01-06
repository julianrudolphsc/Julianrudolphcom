Meteor.publish('projects', function(){
  return Projects.find();
});
Meteor.publish('posts', function(){
  return Posts.find();
});
Meteor.publish('projectImages', function(){
  return ProjectImages.find();
});

Meteor.methods({
  "insertPost": function(title, body){
    Posts.insert({
      title: title,
      body: body
    });
  },
  'deletepost': function(){
    Posts.remove(Posts.findOne({_id: currentPost}));
  }
});
