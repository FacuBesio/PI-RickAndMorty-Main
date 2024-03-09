import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/views/About/About.jsx";
import Home from "./components/views/Home/Home.jsx";
import Landing from "./components/views/Landing/Landing.jsx";
import Detail from "./components/views/Detail/Detail.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
const URL = "http://localhost:3001/rickandmorty/character/";
// import onSearch from "./functions/indexFunctions.js";

function App() {
  // Variables
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "mail@gmail.com";
  const PASSWORD = "123456";

  // States:
  // const [characters, setCharacters] = useState([]);
  const characters = useSelector((state) => state.characters);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // CSS Body Dinamico:
  useEffect(() => {
    // Verifica la ruta actual y aplica estilos al cuerpo en consecuencia
    if (pathname === "/" || pathname === "/about") {
      document.body.style.backgroundSize = "cover";
      document.body.style.backdropFilter = "blur(8px)"; // Estilo para la ruta '/'
    } else {
      document.body.style.backdropFilter = "blur(0px)"; // Estilo para la ruta '/home'
    }
  }, [pathname]);

  // Functions:

  const onClose = (characterId) => {
    setCharacters(characters.filter((item) => item.id !== characterId));
  };

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      if (access) {
        navigate("/home");
      } else {
        alert("Usuario y/o contraseña incorrecto");
      }
    } catch (error) {
      console.log(`* Error Login: ${error.message} *`);
    }
  }

  function logout() {
    setUserData({
      email: "",
      password: "",
    });
    setAccess(false);
  }

  return (
    <div className="App">
      {/* {  console.log(onSearch)} */}
      {pathname !== "/" && <Nav logout={logout} pathname={pathname} />}
      <Routes>
        <Route path="/" element={<Landing login={login} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route path='*' element={<Detail />} /> */}
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
