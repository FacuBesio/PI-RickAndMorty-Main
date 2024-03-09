import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_CARDS,
  ORDER_CARDS,
  GET_ALL_CHARACTERS,
  GET_CHARACTER_DETAIL,
  CLEAN_DETAIL,
  SEARCH_CHARACTER,
} from "./actionsType";
import axios from "axios";
const URL = "http://localhost:3001/rickandmorty/character/";

//?CARDS
//* GET ALL CHARACTER
export const getAllCharacters = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${URL}`);
      return dispatch({ type: GET_ALL_CHARACTERS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

//* SERACH CHARACTER
export const onSearch = (id, characters) => {
  return async (dispatch) => {
    try {
      if (!id) return alert("Ingresa un Id");
      if (id > 826)
        return alert(
          `No existe un personaje con el Id: ${id}. Puedes elegir un personaje desde 1 al 826.`
        );
      if (characters.find((char) => char.id == id)) {
        return alert(`Ya existe un personaje con el Id: ${id}`);
      }
      const { data } = await axios.get(`${URL}${id}`);
      // console.log("test");
      return dispatch({ type: SEARCH_CHARACTER, payload: data });
    } catch (error) {
      console.log(`action Error: ${error.message}`);
    }
  };
};

// ? FAVORITES
// ACTION | addFav
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(`addFav Error: ${error.message}`);
    }
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(`addFav Error: ${error.message}`);
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER_CARDS,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER_CARDS,
    payload: order,
  };
};

// ? DETAIL
export const getCharacterDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      return dispatch({ type: GET_CHARACTER_DETAIL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
