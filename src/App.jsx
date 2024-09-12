import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [gamemode, setGamemode] = useState("addition");

  const [isVisible, setIsVisible] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleNavbar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Navbar navbar={{ isVisible, setIsVisible, toggleNavbar }} options={{ setDifficulty, setGamemode }} />
      <Main
        navbar={{ isVisible, setIsVisible, toggleNavbar }}
        theme={{ dark, setDark }}
        options={{ difficulty, gamemode }}
      />
    </div>
  );
}

export default App;
