if (Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('collegelist');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);


FlowRouter.route('/',{
	name: 'home',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('collegelist');
		}
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/collegelist', {
	name: 'collegelist',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Colleges'});
	}
});

FlowRouter.route('/college/:id', {
	name: 'college',
	action() {
		BlazeLayout.render('MainLayout', {main: 'CollegeSingle'});
	}
});

FlowRouter.route('/profile', {
	name: 'profile',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Profile'});
	}
});

FlowRouter.route('/mycolleges', {
	name: 'mycolleges',
	action() {
		BlazeLayout.render('MainLayout', {main: 'MyColleges'});
	}
});