var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var ImgSchema = new Schema({
    img:{
     data: Buffer, 
    contentType: String
    }
});
module.exports = Image = mongoose.model('photos', ImgSchema);