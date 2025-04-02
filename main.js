const express = require('express')
const movieRoutes = require('./routes/movies.js')
const connectDB = require('./lib/db.js')
const app = express()
const PORT = 3000

connectDB()

app.get("/",(req,res)=>{
    res.json({msg:"Hello Guys"});
});


app.use('/movies',movieRoutes);

app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})