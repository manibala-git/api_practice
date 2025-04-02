const Movie = require("../models/schema");

const movieIndex = (req, res) => {
    res.send("Get all  list")
};

const movieCreate = async (req, res) => {
    //id,title,desc
    const newMovie = new Movie({
        title: req.body.title,
        desc: req.body.desc
    })
    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const moviesUpdate = (req, res) => {
    res.send("update an movie list")
}

const moviesDelete = (req, res) => {
    res.send("delete an movie list")
}
module.exports = { movieIndex, movieCreate, moviesUpdate, moviesDelete };