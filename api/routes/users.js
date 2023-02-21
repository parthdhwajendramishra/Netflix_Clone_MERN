const router = require("express").Router();
const User =require("../models/User");
const CryptoJS = require("crypto-js");
const verify =require("../middleware/verifyToken");


// Update
router.put("/:id",verify,async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }

        try{
            const updatedUser=await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            });

            res.status(200).json(updatedUser);
        }catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(403).json("You can update only your account!");
    }
});



// Delete

router.delete("/:id",verify,async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        try{
            const updatedUser=await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted...");
        }catch(err){
            res.status(500).json(err);
        }
    }
});


module.exports=router
