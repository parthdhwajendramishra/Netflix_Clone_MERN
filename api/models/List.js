const mongoose = require("mongoose");

/*The schema has the following fields:

    title: A string that is required and unique.
    type: A string that specifies the type of list (e.g. "movie" or "series").
    genre: A string that specifies the genre of the list (e.g. "action" or "comedy").
    content: An array of items that are part of the list.

The timestamps option is set to true,
 which will automatically add createdAt 
 and updatedAt fields to the documents created using this schema.*/

const ListSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
        unique: true
    },

    type: {
        type: String,
    },
   
    genre:{
        type:String
    },
    content:{
        type:Array
    }
    
},
    { timestamps: true }
)

module.exports =mongoose.model("List",ListSchema);