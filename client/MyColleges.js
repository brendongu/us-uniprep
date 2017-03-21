Template.MyColleges.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('colleges');
	});
});

Template.MyColleges.helpers({
	colleges: ()=> {
		return Colleges.find({applied: true});
	}
});