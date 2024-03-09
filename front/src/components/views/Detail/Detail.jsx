import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacterDetail, cleanDetail } from "../../../redux/actions";
import { Link, useParams } from "react-router-dom";
import style from "./Detail.module.css";


const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const characterDetail = useSelector((state) => state.characterDetail);

  useEffect(() => {
    dispatch(getCharacterDetail(id));
    return () => dispatch(cleanDetail());
  }, [id]);

  return (
    <div className={style.detail}>
      <section>
        <div className={style.detailText}>
          <h2>{characterDetail.id}</h2>

          <div>
            <h2>Name: {characterDetail.name}</h2>
            <h2>Status: {characterDetail.status}</h2>
            <h2>Specie: {characterDetail.species}</h2>
            <h2>Gender: {characterDetail.gender}</h2>
            <h2>Origin: {characterDetail.origin?.name}</h2>
          </div>
        </div>
        <div className={style.detailImg}>
          <img src={characterDetail.image} alt="Imagen Personaje" />
        </div>
      </section>
      <div>
        <Link to={`/home`}>
          <button>Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
