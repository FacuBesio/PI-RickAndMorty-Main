const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getAllCharacters = async (req, res) => {
  try {

    const { data } = await axios.get(`${URL}`);
    const characters = data.results;
    return characters
      ? res.status(200).json(characters)
      : res.status(404).send("Not found");
  } catch (error) {
    return res.status(500).send("error: " + error.message);
  }
};

module.exports = getAllCharacters;
