import { useQuery } from "@tanstack/react-query";
import client from "api/client";
import axios from "axios";

// return list of pokemon names, pokemon urls, next url and previous url
const usePokemon = (url) => {
  return useQuery({
    queryKey: ["pokemonNames", url],
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
    },
  });
};

// return list of pokemon names
const usePokemonNames = () => {
  return useQuery({
    queryKey: ["pokemonNames"],
    queryFn: async () => {
      const response = await client.get("pokemon?limit=100000&offset=0");
      const arrayNames = response.data.results;
      return arrayNames.map(p => p.name)
    },
  });
};

// return pokemon details (type, name, image, etc...) for single pokemon
const usePokemonDetails = (name) => {
  return useQuery({
    queryKey: ["pokemonDetails", name],
    queryFn: async () => {
      const response = await client.get(`pokemon/${name}`);
      return response.data;
    },
  });
};


// return pokemon color for single pokemon
const usePokemonColor = (name) => {
  return useQuery({
    queryKey: ["pokemonColor", name],
    queryFn: async () => {
      const response = await client.get(`pokemon-species/${name}`);
      return response.data.color.name;
    },
  });
};


export { usePokemon, usePokemonNames, usePokemonDetails, usePokemonColor };