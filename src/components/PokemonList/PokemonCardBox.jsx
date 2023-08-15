import React from "react";
import usePickPokemonColor from "hooks/usePickPokemonColor";

const PokemonCardBox = ({ pokemon }) => {
  const { types, name } = pokemon;
  const { colorScheme, isColorLoading } = usePickPokemonColor(name);

  if (isColorLoading) return (
    <div className="mx-auto relative -top-14 z-[-1] h-[140px] w-[254px] rounded-xl p-4 flex items-end bg-zinc-50">
      <div>
        <div className="h-[18px] bg-zinc-100 w-[100px] mb-2"></div>
        <div className="h-[10px] bg-zinc-100 w-[50px]"></div>
      </div>
    </div>
  );

  return (
    <div
      className="mx-auto relative -top-14 z-[-1] h-[140px] w-[254px] rounded-xl p-4 flex items-end"
      style={{
        backgroundColor: "white",
        background: `linear-gradient(to right top, ${colorScheme.rgba90}, ${colorScheme.rgba65})`,
        boxShadow: `0 20px 20px -10px ${colorScheme.rgba40}`,
      }}
    >
      <div style={{ color: colorScheme.textColor }}>
        <div className="mb-1 text-xl font-bold capitalize">{name}</div>
        {types.map((type, index) => (
          <span
            key={index}
            style={{ background: colorScheme.badgeBg }}
            className="px-2 py-1 mr-1.5 text-xs rounded-lg capitalize "
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCardBox;
