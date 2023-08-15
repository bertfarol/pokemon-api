import React, { createContext, useState } from "react";
import { usePokemon } from "../api/services/Pokemon";
import { pokemonBaseURL } from "../api/client";


export const PokemonContext = createContext({});

const PokemonProvider = ({ children }) => {
  const [currentUrl, setCurrentUrl] = useState(
    `${pokemonBaseURL}/pokemon?limit=12&offset=0`
  );

  const { data: pokemon, isLoading } = usePokemon(currentUrl);

  const gotoNextPage = () => {
    setCurrentUrl(pokemon.next);
  };

  const gotoPrevPage = () => {
    setCurrentUrl(pokemon.previous);
  };


  const contextValue = {
    pokemon,
    pokemonNames: pokemon?.results.map((p) => p.name),
    gotoNextPage: pokemon?.next ? gotoNextPage : null,
    gotoPrevPage: pokemon?.previous ? gotoPrevPage : null,
    isLoadingPokemon: isLoading,
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
