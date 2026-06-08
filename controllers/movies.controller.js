import movie from "../models/movies.model.js";

export const movieIndex = (req, res) => {
  res.send("movie readed");
};

export const moviePost = async(req, res) => {
  // create the movie info

  // id ,title,desc
  

  //   res.send("movie created");

 // validate your data.

 const newMovie=new movie({
     title:req.body.title,
     desc:req.body.desc

 })
// when we do network operation its take time 


 try{
   const movie= await newMovie.save()
   return res.status(201).json(movie)// best pratice always return data whay u stored 

   // 201 --> ok stause code 

   

 }
 catch(err){
    return res.status(400).res.json({message:err.message})
 }

  console.log(req.body);

   return res.json(req.body);// respone to stop 
};

export const moviePut = (req, res) => {
  res.send("movie data updated");
};

export const movieDelete = (req, res) => {
  res.send("movie deleted");
};
