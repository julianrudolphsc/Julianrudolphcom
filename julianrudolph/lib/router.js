Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  this.route('home', {
    path: '/',
    template: '/home'
  })

  this.route('about');
  this.route('work');

  this.route('blog', {
    path: '/blog',
    template: 'blog'
  })

  this.route('contact');

  //admin routes
  //posts
  this.route('list_post', {
    path: '/admin/posts',
    template: 'list_post'
  });

  this.route('add_post', {
    path: '/admin/posts/add',
    template: 'add_post'
  });

  this.route('edit_post', {
    path: '/admin/posts/:_id/edit',
    template: 'edit_post'
  });


  //projects
  this.route('list_projects', {
    path: '/admin/projects',
    template: 'list_projects'
  });

  this.route('add_project', {
    path: '/admin/projects/add',
    template: 'add_project'
  });

  this.route('edit_project', {
    path: '/admin/projects/:_id/edit',
    template: 'edit_project'
  });

  //login
  this.route('login', {
    path: '/admin',
    template: 'login'
  });

});
