import React from "react";
import { Link, useParams } from "react-router-dom";
import ImageLoader from "assets/pokeball.png";
import Image from "components/common/Image";
import DataCard from "components/DataCard";
import DataProgressBar from "components/DataCard/DataProgressBar";
import DataColumn from "components/DataCard/DataColumn";
import DataRow from "components/DataCard/DataRow";
import usePickPokemonColor from "hooks/usePickPokemonColor";
import PokeballLoader from "components/common/PokeballLoader";
import { usePokemonDetails } from "api/services/Pokemon";
import { Icon } from "@iconify/react";

const PokemonPage = () => {
   const { id } = useParams();
   const urlId = id;
   let pokemonName = urlId.includes("-") ? urlId.split("-")[0] : urlId;

  const { data: PokemonData, isLoading } = usePokemonDetails(urlId);
  const { colorScheme, isColorLoading } = usePickPokemonColor(pokemonName);

  if (isLoading || isColorLoading) return <PokeballLoader />;

  const {
    name,
    base_experience,
    types,
    weight,
    height,
    abilities,
    stats,
    sprites,
  } = PokemonData;

  return (
    <div className="relative max-w-4xl px-4 mx-auto -top-24">
      <div className="flex justify-center pokemon-shadow">
        <Image
          src={sprites.other.home.front_default}
          imageLoader={ImageLoader}
          alt="pokemon"
          className="duration-300 group-hover:scale-105"
        />
      </div>
      <div
        className="mx-auto relative -top-14 z-[-1] rounded-xl p-5 min-h-[140px]"
        style={{
          backgroundColor: "white",
          background: `linear-gradient(to right top, ${colorScheme.rgba90}, ${colorScheme.rgba65})`,
          boxShadow: `0 20px 20px -10px ${colorScheme.rgba40}`,
        }}
      >
        <div className="mt-16">
          <div style={{ color: colorScheme.textColor }}>
            <div className="mb-1 text-xl font-bold capitalize">{name}</div>
            {types.map((t) => (
              <span
                key={t.slot}
                className="px-2 py-1 mr-1.5 text-xs rounded-lg capitalize "
                style={{ background: "rgba(255, 255, 255, 0.1)" }}
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mt-9">
          <div className="flex flex-col gap-4">
            <DataCard title="Base Experience">
              <DataRow>
                <DataProgressBar
                  name="EXP"
                  value={base_experience}
                  max={base_experience}
                  barForeground={colorScheme.rgb}
                  barBackground={colorScheme.rgba15}
                />
              </DataRow>
            </DataCard>
            <DataCard title="Physical Characteristics">
              <DataRow>
                <DataColumn
                  firstData={["Weight", `${weight} lbl`]}
                  secondData={["Height", `${height} ft`]}
                />
              </DataRow>
            </DataCard>
            <DataCard title="Abilities">
              {abilities.map((ability) => (
                <DataRow key={ability.slot}>
                  <div className="text-[13px] capitalize">
                    {ability.ability.name}
                  </div>
                </DataRow>
              ))}
            </DataCard>
          </div>
          <div>
            <DataCard title="Base Status">
              {stats.map((stat, index) => (
                <DataRow key={index}>
                  <DataProgressBar
                    name={stat.stat.name}
                    value={stat.base_stat}
                    max={stat.base_stat}
                    barForeground={colorScheme.rgb}
                    barBackground={colorScheme.rgba15}
                  />
                </DataRow>
              ))}
            </DataCard>
          </div>
        </div>
      </div>
      <Link
        to="/"
        className="flex items-center h-10 gap-2 px-3 font-medium duration-300 rounded hover:bg-zinc-100 w-fit"
      >
        <Icon icon="uil:angle-left-b" className="w-4 h-4" />
        <span>Back</span>
      </Link>
    </div>
  );
};

export default PokemonPage;
