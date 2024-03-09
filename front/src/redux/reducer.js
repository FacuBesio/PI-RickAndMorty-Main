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

const inicialState = {
  characters: [],
  myFavorites: [],
  allCharacters: [],
  characterDetail: {},
};

const reducer = (state = inicialState, action) => {
  switch (action.type) {
    case SEARCH_CHARACTER:
      return {
        ...state,
        characters: [action.payload, ...state.characters]
      };
      
      case GET_ALL_CHARACTERS:
        return {
          ...state,
          characters: [action.payload]
        };
    // case ADD_FAV:
    //   return {
    //     ...state,
    //     myFavorites: [action.payload, ...state.allCharacters],
    //     allCharacters: [action.payload, ...state.allCharacters],
    //   };
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    // case REMOVE_FAV:
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter(
    //       (char) => char.id !== action.payload
    //     ),
    //     allCharacters: state.allCharacters.filter(
    //       (char) => char.id !== action.payload
    //     ),
    //   };

    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };

    case FILTER_CARDS:
      const genderFilter = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "All" ? state.allCharacters : genderFilter,
      };

    case ORDER_CARDS:
      const orderCards = state.myFavorites.sort((a, b) => {
        if (action.payload === "ascendente") {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
      return {
        ...state,
        myFavorites: [...orderCards],
      };


    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };

    default:
      return { ...state };
  }
};

export default reducer;
