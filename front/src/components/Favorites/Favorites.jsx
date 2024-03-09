import { connect } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./Favorites.module.css";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={style.favorites}>
      <h1>Favorites</h1>
      <div className={style.selectoresFiltroOrdenado}>
        <select
          name="order"
          defaultValue="orderCharacter"
          onChange={handleOrder}
        >
          <option value="orderCharacter" disabled="disabled">
            Order...
          </option>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
        <select name="filter" defaultValue="All" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={style.favoritesCards}>
        {myFavorites.map((character) => {
          return <Card character={character} key={character.id} />;
        })}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);
