Meteor.publish('projects', function(){
  return Projects.find();
});
Meteor.publish('posts', function(){
  return Posts.find();
});
Meteor.publish('projectImages', function(){
  return ProjectImages.find();
});
