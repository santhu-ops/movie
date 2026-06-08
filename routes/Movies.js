import express from "express";
import {
  movieDelete,
  MovieDetail,
  movieIndex,
  moviePost,
  moviePut,
} from "../controllers/movies.controller.js";

const router = express.Router();

//for reading the movies

// /movies/movies

// R-READING
router.get("/", movieIndex);

// by checking id and projecting the movie

//For creating movies

// C-CREATING A MOVIE
router.post("/", moviePost);

router.get("/:id", MovieDetail);

// id,title,description

// U -UPDATING
router.put("/:id", moviePut);

// D- DELETE
router.delete("/:id", movieDelete);

export default router;
