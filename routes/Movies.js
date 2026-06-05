import express from "express";
import { movieDelete, movieIndex, moviePost, moviePut } from "../controllers/movies.controller.js";

const router = express.Router();

//for reading the movies

// /movies/movies


// R-READING
router.get("/",movieIndex);

//For creating movies

// C-CREATING
router.post("/",moviePost);

// U -UPDATING
router.put("/:id",moviePut);

// D- DELETE
router.delete("/:id",movieDelete);


export default router
