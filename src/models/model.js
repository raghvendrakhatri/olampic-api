const mongoose=require('mongoose');
const MySchema= new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:
    {
        type:Date,
        required:true,
        trim:true
    },
    country:
    {
        type:String,
        required:true,
        trim:true
    },
    score:
    {
        type:Number,
        trim:true
    },
    event:
    {
        type:String,
       default:"100m"
    },
}) ;

const Athletic=new mongoose.model("athletic",MySchema);

module.exports=Athletic;