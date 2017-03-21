Template.College.helpers({
	updateCollegeId: function() {
		return this._id;
	},
	editMode: function() {
		return Template.instance().editMode.get();
	}
});

Template.College.events({
	'click .toggle-menu': function() {
		Meteor.call('toggleMenuItem', this._id, this.applied);
	},
	'click .fa-trash': function() {
		Meteor.call('deleteCollege', this._id);
	},
	'click .fa-pencil': function(event, template) {
		template.editMode.set(!template.editMode.get());
	}
});

Template.College.onCreated(function() {
	this.editMode = new ReactiveVar(false);
	Meteor.call('formatDate', this._id, this.date);
});
