Template.layout.onRendered(function(){
  this.$('.datetimepicker').datetimepicker();
});

Template.add_project.events({
  'submit .add_project_form': function(event){
    event.preventDefault();
    var name = event.target.name.value;
    var type = event.target.type.value;
    var client = event.target.client.value;
    var description = event.target.description.value;
    var projectDate = event.target.projectDate.value;

    var file = $('#projectImage').get(0).files[0];

    if(file){
      fsFile = new FS.File(file);
      ProjectImages.insert(fsFile, function(err, result){
        if(!err){
          // var projectImage = '/cfs/files/ProjectImages/' + result._id;
          FlashMessages.sendError(err.reason);
        }else{
          Meteor.call('insertProject', name, type, client, description, projectDate, file, function(error, result){
            var projectImage = '/cfs/files/ProjectImages/' + result._id;
          });
          FlashMessages.sendSuccess("Project Added");
          Router.go('/admin/projects');
          return false;
        }
  });
