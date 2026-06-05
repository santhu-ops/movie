import express from 'express'


const app = express()
const PORT = 4000

app.get('/',(req,res)=>{
    res.json({msg:"root file "})

})

// CRUD functionality movies

//for reading the movies

// R-READING 
app.get("/movies",()=>{

})


//For creating movies


// C-CREATING
app,post('/movies',()=>{

})

// U -UPDATING
app.put('/movies/:id',()=>{

})


// D- DELETE
app.delete('/movie/:id',()=>{

})












app.listen(PORT,()=>{
    console.log("server is runnning");
    
})

// dry principle

//kiss principle -->keep it simple, stupid