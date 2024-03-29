const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const charId = req.params.id;
    const { data } = await axios.get(`${URL}${charId}`);
    const { id, status, name, species, origin, image, gender } = data;
    const character = { id, status, name, species, origin, image, gender };
    return character.id
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  } catch (error) {
    return res.status(500).send("error: " + error.message);
  }
};

module.exports = getCharById;
