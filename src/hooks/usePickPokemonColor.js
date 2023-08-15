import colorCodes from "../utils/colorCodes";
import { useEffect, useState } from "react";
import { usePokemonColor } from "../api/services/Pokemon";

const usePickPokemonColor = (name) => {
  const { data: color, isLoading } = usePokemonColor(name);

  const [colorScheme, setColorScheme] = useState({});

  useEffect(() => {
    if (!isLoading) {
      const getColor = colorCodes(color);
      setColorScheme(getColor);
    }
  }, [color, isLoading]);

  return {
    colorScheme,
    isColorLoading: isLoading,
  };
};

export default usePickPokemonColor;
