const { Schema, model } = require("mongoose");


const schema = new Schema({
    title: String,
    desc: String
});

const Movie = model("Movie",schema)

module.exports = Movie