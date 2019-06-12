const express = require("express");
const router = express.Router();
// Load Coaches model
const CoachesModel=require("../../models/CoachesBio");
//Read from database
router.get("/",(req,res) => {
    CoachesModel.find()
        .sort({id:-1})
        .then(models => res.json(models))
});
//write to database
router.post("/",(req,res)=>{
        const coachModel=new CoachesModel({
            filepath:req.body.filepath,
            filename: req.body.filename,
            coachname: req.body.coachname,
            coachbios: req.body.coachbios,
            familyphoto: req.body.familyphoto
        })
        coachModel.save().then(model => res.json(model));
    });
module.exports = router;