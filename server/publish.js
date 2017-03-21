Meteor.publish('colleges', function(){
	return Colleges.find({author: this.userId});
});

Meteor.publish('singleCollege', function(id){
	check(id, String);
	return Colleges.find({_id: id});
});
