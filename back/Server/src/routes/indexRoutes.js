const express = require('express');
const router = express.Router();
const {postFav, deleteFav} = require("../controllers/handleFavorites");
const getCharById = require("../controllers/getCharById");
const getAllCharacters = require("../controllers/getAllCharacters");
const login = require("../controllers/login");

//? RUTAS
//* GET
router.get("/character", getAllCharacters);
router.get("/character/:id", getCharById);
router.get("/login", login);

//* POST
router.post("/fav", postFav);

//* DELETE
router.delete("/fav/:id", deleteFav);

module.exports = router;