Meteor.startup(function(){
  if(Meteor.users.find().count() === 0){
    Accounts.createUser({
      email: 'julian.rudolphdev@gmail.com',
      password: '031386ma'
    });
  }
});
