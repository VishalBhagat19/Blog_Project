const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    name:{
        type : String,
        required:true,
    },
    email:{
        type : String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
   
  
},{timestamps:true})


//create collection
const AdminModel = mongoose.model('admin',AdminSchema)
//                                     ^ collection name


module.exports= AdminModel