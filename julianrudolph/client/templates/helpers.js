Meteor.subscribe('projects');
Meteor.subscribe('posts');
Template.login.events({
  'submit .login-user': function(event){
    var email = event.target.email.value;
    var password = event.target.password.value;

    Meteor.loginWithPassword(email, password, function(err){
      if(err){
        event.target.email.value = email;
        event.target.password.value = password;
        FlashMessages.sendError(err.reason);
      }else{
        FlashMessages.sendSuccess("you are now logged in");
        Router.go('/admin/projects');
      }
    });
      //clear form
      event.target.email.value = '';
      event.target.password.value = '';
      return false;
  }
});
Template.layout.events({
  'click .logout-user': function(event){
    Meteor.logout(function(err){
      if(err){
        FlashMessages.sendError(err.reason);
      }else{
        FlashMessages.sendSuccess("You are now logged out");
        Router.go('/');
      }
    });
    //prevent submit
    return false;
  }
});

//date time format
Template.registerHelper('formatDate', function(date){
  return moment(date).format('MMMM do YYYY, h:mm a');
});
Template.registerHelper('getSiteTitle', function(){
  return 'Julian Rudolph';
});
Template.registerHelper('getAdminName', function(){
  return 'Julian Rudolph';
});
Template.registerHelper('getAdminImage', function(){
  return '/assets/img/user.png';
});

Template.work.helpers({
  projects: function(){
    return Projects.find();
  }
});
