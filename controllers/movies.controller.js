export const movieIndex = (req, res) => {
  res.send("movie readed");
};

export const moviePost = (req, res) => {
  // create the movie

  // id ,title,desc

  console.log(req.body);

  res.json(req.body)

  //   res.send("movie created");
};

export const moviePut = (req, res) => {
  res.send("movie data updated");
};

export const movieDelete = (req, res) => {
  res.send("movie deleted");
};
