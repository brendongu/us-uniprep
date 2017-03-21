Template.Profile.onCreated(function(){
	this.autorun(() => {
		this.subscribe('colleges');
	});
});

Template.Profile.helpers({
	colleges: ()=> {
		return Colleges.find({});
	}
});