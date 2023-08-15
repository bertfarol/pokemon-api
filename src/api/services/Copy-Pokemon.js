import { useQuery } from "@tanstack/react-query";
import client from "../client";
import axios from "axios";

export default {
  //return list of all pokemon names
  usePokemon: (url) =>
    useQuery({
      queryKey: ["pokemon", url],
      queryFn: async () => {
        const response = await axios.get(url);
        return response.data;
      },
    }),

  //return pokemon details
  useDetails: (name) =>
    useQuery({
      queryKey: ["pokemonDetails", name],
      queryFn: async () => {
        const response = await client.get(`pokemon/${name}`);
        return response.data;
      },
    }),

  //return
  useColor: (name) =>
    useQuery({
      queryKey: ["pokemonColor", name],
      queryFn: async () => {
        const response = await client.get(`pokemon-species/${name}`);
        return response.data.color.name;
      },
    }),
};


