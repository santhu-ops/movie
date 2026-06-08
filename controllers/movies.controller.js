import movie from "../models/movies.model.js";

export const movieIndex = async (req, res) => {
  // query

  try {
    const movies = await movie.find();

    res.json(movies);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const MovieDetail = async (req, res) => {
  // finding the id

  try {
    const Movie = await movie.findById(req.params.id);

    console.log(Movie);

    if (Movie == null) {
      return res.status(404).json({ message: "cannot find the movie" });
    } else {
      return res.json(Movie);
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const moviePost = async (req, res) => {
  // create the movie info

  // id ,title,desc

  //   res.send("movie created");

  // validate your data.

  const newMovie = new movie({
    title: req.body.title,
    desc: req.body.desc,
  });

  // when we do network operation its take time

  try {
    const savedMovie = await newMovie.save();

    // 201 --> ok status code
    return res.status(201).json(savedMovie); // best practice always return data what you stored
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const moviePut = async (req, res) => {
  // validate fields user input

  // first eruku ra field ku la validate pannum next atha update pannum

  try {
    const updatedMovie = await movie.findById(req.params.id);

    if (updatedMovie == null) {
      return res.status(404).json({
        message: "cannot find the movie",
      });
    }

    if (req.body.title != null) {
      updatedMovie.title = req.body.title;
    }

    if (req.body.desc != null) {
      updatedMovie.desc = req.body.desc;
    }

    const result = await updatedMovie.save();

    return res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


export const movieDelete = async (req,res)=>{}