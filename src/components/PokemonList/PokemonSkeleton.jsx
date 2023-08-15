import React from 'react'
import ImageLoader from "assets/pokeball.png";

const PokemonSkeleton = () => {
  return (
    <div className="max-w-[285px] animate-pulse">
      <div className="pokemon-shadow">
        <img
          src={ImageLoader }
          alt=""
          className="w-[285px] group-hover:scale-105 duration-300"
        />
      </div>
      <div className="mx-auto relative -top-14 z-[-1] h-[140px] w-[254px] rounded-xl p-4 flex items-end bg-zinc-50">
        <div>
          <div className="h-[18px] bg-zinc-100 w-[100px] mb-2"></div>
          <div className="h-[10px] bg-zinc-100 w-[50px]"></div>
        </div>
      </div>
    </div>
  );
}

export default PokemonSkeleton