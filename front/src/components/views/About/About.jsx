import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.aboutContainer}>
        <h1>ABOUT</h1>
      <div className={style.about}>
        <h2>- Rick and Morty - DEMO - </h2>
        <p>
          Aplicación web creada en enero de 2024 mediante el uso de JavaScript,
          React, Redux, HTML y CSS para el front-end, y con NODE.js y Express para el back-end. 
          El objetivo de la aplicación es brindar una
          navegación por los personajes que la API de 'Rick and Morty' nos
          ofrece. Desde 'Home', se podrán agregar mediante su número de carta
          (id) e ingresar a cada uno para obtener sus detalles. En el caso de
          querer eliminar un personaje, bastará con presionar sobre la 'x'. Tambien se podrán agregar los personajes que mas vayan gustando a un listado de favoritos. Dentro de la seccion 'Favorites' se podrán visualizar los personajes agregados y organizar la información con diferentes filtrados. 
        </p>

        <p>
          'Rick and Morty' es una serie de animación creada por Justin Roiland y
          Dan Harmon en 2013. La serie sigue las desventuras de un científico,
          Rick Sánchez, y su fácilmente influenciable nieto, Morty, quienes
          pasan el tiempo entre la vida doméstica y los viajes espaciales,
          temporales e intergalácticos. La serie se originó a partir de un
          cortometraje rudimentario animado por Roiland para el festival de cine
          Channel 101 llamado 'Doc and Mharti'
        </p>
      </div>
    </div>
  );
};

export default About;
