Template.Colleges.onCreated(function(){
	this.autorun(() => {
		this.subscribe('colleges');
	});
});

Template.Colleges.helpers({
	colleges: ()=> {
		return Colleges.find({});
	}
});

Template.Colleges.events({
	'click .new-college': () => {
		Session.set('addCollege', true);
	}
});