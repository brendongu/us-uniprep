Colleges = new Mongo.Collection('colleges');

Colleges.allow({
	insert: function(userId, doc){
		return !!userId; 
	},
	update: function(userId, doc){
		return !!userId;
	}
});

Visits = new SimpleSchema({
	date: {
		type: Date,
		label: "Date Visited",
		}
});

CollegeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "College Name"
	},
	description: {
		type: String,
		label: "Description"
	},
	visits : {
		type: [Visits]
	},
	applied: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	toggleMenuItem: function(id, currentState) {
		Colleges.update(id, {
			$set: {
				applied: !currentState
			}
		});
	},
	deleteCollege: function(id) {
		Colleges.remove(id);
	},
	formatDate: function(id, date) {
		Colleges.update(date, {
			$set: {
				date: moment.utc(date).format('MM-DD-YYYY') 
			}
		});
	}
});

Colleges.attachSchema( CollegeSchema );