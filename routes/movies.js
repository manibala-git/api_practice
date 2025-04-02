const express = require('express');
const { movieIndex, movieCreate, moviesUpdate, moviesDelete } = require('../controllers/moviesController');

const router = express.Router()


//CRUD functionality

router.get("/",movieIndex);

router.post('/',movieCreate)

router.put('/:id',moviesUpdate)

router.delete('/:id',moviesDelete)

module.exports = router;