import React from 'react'
import Pokeball from "assets/pokeball.png";

const PokeballLoader = () => {
  return (
    <div className="fixed top-0 left-0 z-30 grid w-full h-full bg-white place-items-center">
      <div>
        <img
          src={Pokeball}
          alt="Pokemon"
          className="w-48 h-48 animate-bounce"
        />
        <div className="text-center text-7xl animate-ping leading-none text-[#ff1c1c]">
          . . .
        </div>
      </div>
    </div>
  );
}

export default PokeballLoader