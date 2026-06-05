import express from 'express'
import movieRoutes from './routes/Movies.js'


const app = express()
const PORT = 4000

app.get('/',(req,res)=>{
    res.json({msg:"root file "})

})

// CRUD functionality movies

//CLIENT ---> MIDDLEWARE(WITH ATTACHMENT) --> SERVER

app.use('/movies',movieRoutes) 


app.listen(PORT,()=>{
    console.log(`server on running on ${PORT}`);
    
})

// dry principle

//kiss principle -->keep it simple, stupid