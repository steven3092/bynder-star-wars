import { useParams } from "react-router-dom";
import { useGetStarWarsCharacter } from "../../hooks/use-get-star-wars-character";
import { useGetStarWarsPlanet } from "../../hooks/use-get-star-wars-planet";
import { GenericCharacter } from "../generic-character/generic-character";
import { useCharacterList } from "../characters-list/hooks/use-characters-list";
import { Loader } from "../loader/loader";

export const ResidentDetails = () => {
  const { residentId, planetId } = useParams();
  const { character } = useGetStarWarsCharacter(residentId);
  const { planet, isLoading } = useGetStarWarsPlanet(planetId);
  const { handleOnClickNavigateToCharacter } = useCharacterList();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <GenericCharacter
          character={character}
          planet={planet}
          handleOnClickGenericCharacter={handleOnClickNavigateToCharacter}
        />
      )}
    </>
  );
};
