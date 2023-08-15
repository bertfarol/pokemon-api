import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Pokedex from "pages/Pokedex";
import Pokemon from "pages/Pokemon";
import PokemonProvider from "context/PokemonContext";
import Logo from "assets/pokemon.png";

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <h1 className="relative z-50 mx-auto mb-4 w-fit">
          <Link to="/">
            <img src={Logo} alt="Pokemon" />
          </Link>
        </h1>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
