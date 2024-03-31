// Steps : 
// 1 . Define Schema(datails about a model => Note: id , userid, title , content, dateadded) , these all fields called schema
// 2  creating model using  the above model , modelname <schem> Note

const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true,
    },
    userid:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
       
    },
    dateadded:{
        type:Date,
        default:Date.now,
    }

});

module.exports= mongoose.model("Note",noteSchema);