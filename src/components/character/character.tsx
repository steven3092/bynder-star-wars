import { useParams } from "react-router-dom";
import { useGetStarWarsCharacter } from "../../hooks/use-get-star-wars-character";
import { useGetStarWarsPlanet } from "../../hooks/use-get-star-wars-planet";
import { GenericCharacter } from "../generic-character/generic-character";
import { useCharacter } from "./hooks/use-character";

export const Character = () => {
  const { characterId, planetId } = useParams();
  const { character } = useGetStarWarsCharacter(characterId);
  const { planet } = useGetStarWarsPlanet(planetId);
  const { handleOnClickNavigateToResident } = useCharacter();

  return (
    <>
      <GenericCharacter
        character={character}
        planet={planet}
        handleOnClickGenericCharacter={handleOnClickNavigateToResident}
      />
    </>
  );
};
