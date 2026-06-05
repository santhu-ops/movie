import express from 'express'
import movieRoutes from './routes/Movies.js'
import connectDb from './lib/db.js'


const app = express()
const PORT = 4000

// data understanding middleware
// eppo la data backup la eruthu varuhtu apo etha middleware us epannum 

app.use(express.json())

//Connect  Db 
connectDb()
app.get('/',(req,res)=>{
    res.json({msg:"root file "})

})

// CRUD functionality movies

//CLIENT ---> MIDDLEWARE(WITH ATTACHMENT) --> SERVER

app.use('/movies',movieRoutes) 


app.listen(PORT,()=>{
    console.log(`server on running on ${PORT}`);
    
})

