const Movie = require("../models/schema");

const movieIndex = async (req, res) => {
    try {
        const Movies = await Movie.find()
        res.json(Movies)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
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

const moviesUpdate = async (req, res) => {
    try {
        const Updatemovie = await Movie.findOneAndUpdate(
            { _id: req.params.id },
            {
                title: req.body.title,
                desc: req.body.desc
            },
            {
                new: true,
            }
        );
        res.status(200).json(Updatemovie)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}


const movieDetail = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        if (movie == null) {
            return res.status(404).json({ message: "Cannot find movie" })
        } else {
            res.json(movie)
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const moviesDelete = async (req, res) => {
    const movieId = req.params.id;
    try {
        await Movie.deleteOne({_id:movieId});
        res.json({message:"Movie deleted"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
module.exports = { movieIndex, movieCreate, moviesUpdate, moviesDelete, movieDetail };