export const movieIndex = (req, res) => {
  res.send("movie readed");
};

export const moviePost = (req, res) => {
  // create the movie

  // id ,title,desc
  // validate your data

  //   res.send("movie created");

  console.log(req.body);

  res.json(req.body);
};

export const moviePut = (req, res) => {
  res.send("movie data updated");
};

export const movieDelete = (req, res) => {
  res.send("movie deleted");
};
