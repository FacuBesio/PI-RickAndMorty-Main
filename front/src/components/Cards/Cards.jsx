import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.cardsContainer}>
      <h1>RICK AND MORTY</h1>
      <div className={style.cards}>
        {characters.map((character) => {
          return (
            <Card character={character} key={character.id} onClose={onClose} />
          );
        })}
      </div>
    </div>
  );
}
