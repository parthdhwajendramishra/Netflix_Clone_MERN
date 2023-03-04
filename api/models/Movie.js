/* The schema defines the shape of a movie document,
 with fields such as title, desc (description), img (poster image),
  trailer, video, year, limit (age limit), genre, and 
  isSeries (boolean indicating if the movie is a series).

The schema also includes timestamps, 
which means that each document will have 
createdAt and updatedAt fields automatically managed by Mongoose.*/



const mongoose = require("mongoose");


const MovieSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
        unique: true
    },

    desc: {
        type: String,
    },
    img: {
        type: String,
    },
    imgTitle: { 
        type: String 
    },
    imgSm: {
        type: String,
    },
    trailer: {
        type: String
    },
    video:{
        type:String
    },
    year:{
        type:String
    },
    limit:{
        type:String
    },
    genre:{
        type:String
    },
    isSeries:{
        type:Boolean,default:false
    }
},
    { timestamps: true }
)

module.exports =mongoose.model("Movie",MovieSchema);