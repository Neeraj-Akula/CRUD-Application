const express=require('express');
const mongoose=require('mongoose');
const phoneslist=require("./model")

const app=express();
app.use(express.json())
app.listen(3000,()=>{
    console.log("server connected")
})

mongoose.connect("mongodb+srv://kialuci:kialuci@cluster0.21diwsl.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("db coonected")}).catch("error at db")

app.post('/addbrand',async(req,res)=>{
    try{
        const{brandname}=req.body;
        const newdata=new phoneslist({brandname});
        await newdata.save();
        return res.send(await phoneslist.find())
    }
    catch{
        return res.send("error at posting");
    }
})


app.get('/allbrandsdata',async(req,res)=>{
    try{
        const alldata=await phoneslist.find()
        return res.send(alldata);
    }
    catch{
        res.send("no data found")
    }
})

app.get('/allbrandsdata/:id',async(req,res)=>{
    try{
        const brand=await phoneslist.findById(req.params.id);
        return res.json(brand)
    }
    catch{
        res.send("no data of brand found")
    }

})
app.get('/deletebrand/:id',async(req,res)=>{
    try{
        await phoneslist.findByIdAndDelete(req.params.id);
        return res.json(await phoneslist.find())
    }
    catch{
        res.send("no data of brand found")
    }

})




app.get('/',(req,res)=>{
    res.send("hello moto")
})