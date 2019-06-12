const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoachesSchema=new Schema({
filepath:{
    type:String,
    required:true
},
filename:{
    type:String,
    required:true
},
coachname:{
    type:String,
    required:true
},
coachbios:{
    type:String,
    required:true
},
familyphoto:{
    type:String,
    required:true
}
});
module.exports=mongoose.model("coachesbio",CoachesSchema);