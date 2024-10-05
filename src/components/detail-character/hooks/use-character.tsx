import { useNavigate } from "react-router-dom";

export const useCharacter = () => {
  const navigate = useNavigate();

  const handleOnClickNavigateToResident = (
    residentUrl: string,
    urlPlanet: string
  ) => {
    const match = residentUrl.match(/\/(\d+)\/?$/);
    const matchPlanetId = urlPlanet.match(/\/(\d+)\/?$/);

    if (match && matchPlanetId) {
      const id = match[1];
      const planetId = matchPlanetId[1];
      navigate(`/resident/${id}/planet/${planetId}`);
    }
  };

  return {
    handleOnClickNavigateToResident,
  };
};
