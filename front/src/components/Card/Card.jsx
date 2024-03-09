import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import style from "./Card.module.css";

const Card = ({ character, onClose, addFav, removeFav, myFavorites }) => {
  const [isFav, setIsFav] = useState(false);

  const { pathname } = useLocation();

  if (character.origin.name === "Earth (Replacement Dimension)"){
    character.origin.name = "Earth"
  }
  const hadleClick = () => {
    onClose(character.id);
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(character.id);
    } else {
      setIsFav(true);
      addFav(character);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.card}>
      {/* CLOSE */}
      {pathname === "/home" && (
        <div className={style.closeButton}>
          <button onClick={hadleClick}>X</button>
        </div>
      )}

      {/* CARD */}
      <div className={style.textCard}>
        {/* <h2>{character.id}</h2> */}

        <Link to={`/detail/${character.id}`}>
          <h2>. {character.name} .</h2>
        </Link>
        <h2>{character.origin.name}</h2>
        {/* {pathname === "/favorites" && <h2>{character.gender}</h2>} */}

        
      </div>
      <div className={style.cardImg}>
        <div className={style.imgIcons}>
          {/* FAVORITES */}
          {isFav ? (
            <button className={style.favoritesButton} onClick={handleFavorite}>
              ❤️
            </button>
          ) : (
            <button className={style.favoritesButton} onClick={handleFavorite}>
              🤍
            </button>
          )}

          <h2>{character.id}</h2>
        </div>

        {/* IMG */}
        <img src={character.image} alt="Imagen Personaje" />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFav: function (character) {
      dispatch(addFav(character));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
