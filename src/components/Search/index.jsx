import React, { useState } from "react";
import { usePokemonNames } from "api/services/Pokemon";
import { Link } from "react-router-dom";
import Pokeball from "assets/pokeball_icon.svg";
import { Icon } from "@iconify/react";

const Search = () => {
  const { data: pokemonNames, isLoading } = usePokemonNames();
  const [search, setSearch] = useState("");

  if (isLoading) return "Loading....";

  const filteredPokemon = pokemonNames.filter((pokemon) => {
    return search.toLowerCase() === ""
      ? pokemon
      : pokemon.toLowerCase().includes(search);
  });

  const isSearchEmpty = search.trim().length === 0;

  return (
    <div className="relative max-w-sm mx-auto mb-20">
      <div
        className={`border rounded-md overflow-hidden flex items-center pl-2 ${
          !isSearchEmpty ? "shadow-lg border-[#3259a2]" : ""
        }`}
      >
        <Icon icon="prime:search" className="w-6 h-6 text-zinc-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search pokemon..."
          className="w-full h-10 px-2 outline-none "
        />
      </div>
      {!isSearchEmpty && !isLoading && (
        <div className="absolute z-50 w-full mt-2 overflow-hidden bg-white rounded-md shadow-lg max-h-[500px] overflow-y-auto">
          <div>
            {filteredPokemon.length === 0 && (
              <div className="relative px-4 py-3 font-medium text-white/90 bg-[#3259a2]">
                No results for <span className="text-white">"{search}"</span>
              </div>
            )}
            {filteredPokemon.map((pokemon, index) => (
              <Link
                to={`/pokemon/${pokemon}`}
                key={index}
                className="relative px-4 py-2 duration-300 flex justify-between items-center hover:bg-[#ffcb05] last:after:hidden after:content-[''] after:border-b after:h-full after:w-[98%] after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:mx-auto"
              >
                <div className="capitalize">{pokemon}</div>
                <img src={Pokeball} alt="Pokemon" className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
