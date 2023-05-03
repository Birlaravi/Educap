var mongoose=require('mongoose');

var AdminSchema = new mongoose.Schema({
    AdminLoginEmail: {type:String,require:true},
    AdminPassword:{type:String,require:true},
});

module.exports = mongoose.model(
	'admin', AdminSchema);
