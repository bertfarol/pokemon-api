import axios from "axios";

export const pokemonBaseURL = "https://pokeapi.co/api/v2";

const client = axios.create({
  baseURL: pokemonBaseURL,
});


export default client;