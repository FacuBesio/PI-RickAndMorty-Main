import Cards from "../../Cards/Cards";
import SearchBar from "../../Nav/SearchBar/SearchBar";

const Home = ({ characters, onClose }) => {
  return (
    <>
      <Cards characters={characters} onClose={onClose} />
    </>
  );
};

export default Home;
