import React from "react";
import Pagination from "components/common/Pagination";
import PokemonList from "components/PokemonList";
import Search from "components/Search";


const Pokedex = () => {

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <Search />
      <PokemonList />
      <Pagination />
    </div>
  );
};

export default Pokedex;
