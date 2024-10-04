import { useParams } from "react-router-dom";
import { useGetStarWarsCharacter } from "../../hooks/use-get-star-wars-character";
import { useGetStarWarsPlanet } from "../../hooks/use-get-star-wars-planet";
import { GenericCharacter } from "../generic-character/generic-character";
import { useCharacterList } from "../characters-list/hooks/use-characters-list";

export const Resident = () => {
  const { residentId, planetId } = useParams();
  const { character } = useGetStarWarsCharacter(residentId);
  const { planet } = useGetStarWarsPlanet(planetId);
  const { handleOnClickNavigateToCharacter } = useCharacterList();

  return (
    <>
      <GenericCharacter
        character={character}
        planet={planet}
        handleOnClickGenericCharacter={handleOnClickNavigateToCharacter}
      />
    </>
  );
};
