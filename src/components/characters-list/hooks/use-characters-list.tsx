import { useNavigate } from "react-router-dom";

export const useCharacterList = () => {
  const navigate = useNavigate();

  const handleOnClickNavigateToCharacter = (url: string, urlPlanet: string) => {
    const match = url.match(/\/(\d+)\/?$/);
    const matchPlanetId = urlPlanet.match(/\/(\d+)\/?$/);

    if (match && matchPlanetId) {
      const id = match[1];
      const planetId = matchPlanetId[1];
      navigate(`/character/${id}/planet/${planetId}`);
    }
  };

  return {
    handleOnClickNavigateToCharacter,
  };
};
