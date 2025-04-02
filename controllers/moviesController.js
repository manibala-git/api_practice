const movieIndex = (req,res)=>{
    res.send("Get all  list")
};

const movieCreate = (req,res)=>{
    res.send("Create an movie list")
}

const moviesUpdate = (req,res)=>{
    res.send("update an movie list")
}

const moviesDelete = (req,res)=>{
    res.send("delete an movie list")
}
module.exports = { movieIndex, movieCreate, moviesUpdate, moviesDelete };