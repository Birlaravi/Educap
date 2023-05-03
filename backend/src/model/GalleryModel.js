var mongoose=require('mongoose');

var GallerySchema = new mongoose.Schema({
    images:[
        {
            public_id :{
                type : String,
                required : true
            },
            url : {
                required : {
                    type : String,
                    required : true
                }
            }
        }
    ]
});

module.exports = mongoose.model(
	'gallery', GallerySchema, 'Gallerys');
