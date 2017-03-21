Template.CollegeSingle.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('singleCollege', id);
	});
});

Template.CollegeSingle.helpers({
	college: ()=> {
		var id = FlowRouter.getParam('id');
		return Colleges.findOne({_id: id});
	},
	visits: ()=> {
		var id = FlowRouter.getParam('id');
		return _.values(this.visits);
	}
});