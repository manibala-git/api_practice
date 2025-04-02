const { Schema, model } = require("mongoose");


const schema = new Schema({
    title:{
        type:String,
        require: true,
        unique: true
    },
    desc:{
        type:String,
        require:true
    }
});

const Movie = model("Movie",schema)

module.exports = Movie