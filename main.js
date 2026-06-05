import express from 'express'


const app = express()
const PORT = 4000

app.get('/',(req,res)=>{
    res.json({msg:"root file "})

})


app.listen(PORT,()=>{
    console.log("server is runnning");
    
})

// dry principle

//kiss principle -->keep it simple, stupid