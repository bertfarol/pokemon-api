import React from "react";
import { Link } from "react-router-dom";
import PokemonSkeleton from "components/PokemonList/PokemonSkeleton";
import ImageLoader from "assets/pokeball.png";
import Image from "components/common/Image";
import { usePokemonDetails } from "api/services/Pokemon";
import PokemonCardBox from "components/PokemonList/PokemonCardBox";


const PokemonCard = ({ pokemonName }) => {
  const { data: pokemon, isLoading: isDataLoading } =
    usePokemonDetails(pokemonName);

  if (isDataLoading ) return <PokemonSkeleton />;

  return (
    <div className="max-w-[285px] hover:brightness-110 duration-300 group">
      <Link to={`pokemon/${pokemon.name}`}>
        <div className="pokemon-shadow">
          <Image
            src={pokemon.sprites.other.home.front_default}
            imageLoader={ImageLoader}
            alt={pokemon.name}
            className="w-[285px] group-hover:scale-105 duration-300"
          />
        </div>
        <PokemonCardBox pokemon={pokemon} />
      </Link>
    </div>
  );
};

export default PokemonCard;
