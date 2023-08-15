import React, { useContext } from "react";
import PokemonCard from "components/PokemonList/PokemonCard";
import { PokemonContext } from "context/PokemonContext";
import PokeballLoader from "components/common/PokeballLoader";


const PokemonList = () => {
  const { pokemonNames, isLoadingPokemon } = useContext(PokemonContext);

  if (isLoadingPokemon) return <PokeballLoader/>;

  return (
    <>
      <div className="grid grid-cols-3 place-items-center">
        {pokemonNames?.map((pokemonName) => (
          <PokemonCard key={pokemonName} pokemonName={pokemonName} />
        ))}
      </div>
    </>
  );
};

export default PokemonList;
