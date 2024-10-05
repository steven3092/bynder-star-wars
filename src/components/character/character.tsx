import { useParams } from "react-router-dom";
import { useGetStarWarsCharacter } from "../../hooks/use-get-star-wars-character";
import { useGetStarWarsPlanet } from "../../hooks/use-get-star-wars-planet";
import { GenericCharacter } from "../generic-character/generic-character";
import { useCharacter } from "./hooks/use-character";
import { Loader } from "../loader/loader";

export const Character = () => {
  const { characterId, planetId } = useParams();
  const { character } = useGetStarWarsCharacter(characterId);
  const { planet, isLoading } = useGetStarWarsPlanet(planetId);
  const { handleOnClickNavigateToResident } = useCharacter();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <GenericCharacter
          character={character}
          planet={planet}
          handleOnClickGenericCharacter={handleOnClickNavigateToResident}
        />
      )}
    </>
  );
};
