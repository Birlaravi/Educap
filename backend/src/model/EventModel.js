var mongoose=require('mongoose');

var EventSchema = new mongoose.Schema({
    EventTitle:{type:String,require:true},
    EventDate:{type:String,require:true},
    EventDescription:{type:String,require:true},
    EventImage:{type:String,require:true},
    RegisteredUser:{type:String,require:true},
});

module.exports = mongoose.model(
	'event', EventSchema, 'Events');
