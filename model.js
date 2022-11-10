const mongoose=require('mongoose');

const phones=mongoose.Schema({
    brandname:{
        type:String,
        required:true
    },
    data:{
        type:Date,
        default:Date.now

    }
})

module.exports=mongoose.model('phones data',phones)