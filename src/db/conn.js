const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/olampics-api",{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:true}).then(()=>
{
    console.log("connection successfull");
}).catch((err)=>
{
    console.log(err);
});
