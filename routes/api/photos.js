const express = require("express");
const router = express.Router();
const Image =require("../../models/Image");
const fs = require("fs");

router.post('/photos',(req,res)=>{
    const newImage = new Image();
    newImage.img.data = fs.readFileSync(req.files.userPhoto.path)
    newImage.img.contentType = 'image/png';
    newItem.save();
   });

module.exports=router;