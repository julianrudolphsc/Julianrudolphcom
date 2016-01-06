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

Posts.allow({
  'remove': function(){
    return true;
  },

  'update':function(){
    return true;
  }
});

Meteor.methods({
  'insertProject': function(name, description, type, client, projectDate, projectImage){
    Projects.insert({
      name: name,
      description: description,
      type: type,
      client: client,
      projectDate: projectDate,
      projectImage: projectImage
    });
  }
});

Projects.allow({
  'insert': function(){
    return true;
  },

  'remove': function(){
    return true;
  },

  'update':function(){
    return true;
  }
});
