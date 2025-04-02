const express = require('express');
const { movieIndex, movieCreate, moviesUpdate, moviesDelete, movieDetail } = require('../controllers/moviesController');

const router = express.Router()


//CRUD functionality

router.get("/",movieIndex);

router.get("/:id",movieDetail);

router.post('/',movieCreate)

router.put('/:id',moviesUpdate)

router.delete('/:id',moviesDelete)

module.exports = router;