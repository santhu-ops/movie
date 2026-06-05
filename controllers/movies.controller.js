export const movieIndex = (req, res) => {
  res.send("movie readed");
};

export const moviePost = (req, res) => {
  res.send("movie created");
};

export const moviePut = (req, res) => {
  res.send("movie data updated");
};


export const movieDelete =(req,res) => {
    res.send("movie deleted")
} 