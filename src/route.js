const express=require('express');
const router= new express.Router();
const Athletic=require("./models/model");
require("./db/conn")
router.get("/",(req,res)=>
{
    res.status(200).send("This is home page");
})
router.post("/athletic", async(req,res)=>
{
    try
    {
        const player=await new Athletic(req.body);
        const createPlayer= await player.save();
        console.log(createPlayer);
        res.status(200).send(createPlayer);
    }

    catch(err)
    {
        res.status(400).send(err)
    }
})

router.get("/athletic", async(req,res)=>
{
    try
    {
       const player= await Athletic.find().sort({ranking:1});
        res.status(200).send(player);
    }

    catch(err)
    {
        res.status(400).send(err)
    }
})


router.get("/athletic/:name", async(req,res)=>
{
    try
    {
        const playername=req.params.name;
       const player= await Athletic.find({name:playername});
       console.log(player);
        res.status(200).send(player);
    }

    catch(err)
    {
        res.status(400).send(err)
    }
})


router.patch("/athletic/:id", async(req,res)=>
{
    try
    {
        const _id=req.params.id;
       const player= await Athletic.findByIdAndUpdate(_id,req.body);
       console.log(player);
        res.status(200).send(player);
    }

    catch(err)
    {
        console.log(err);
        res.status(400).send(err)
    }
})
router.delete("/athletic/:id", async(req,res)=>
{
    try
    {
        const _id=req.params.id;
       const player= await Athletic.findByIdAndDelete(_id,req.body);
    //    console.log(player);
    if(player)
    {
        res.status(200).send("deleted successfully");
    }
    else{
        res.status(404).send("Not deleted");

    }
    }
    catch(err)
    {
        console.log(err);
        res.status(400).send(err)
    }
})
module.exports=router;
